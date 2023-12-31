import io
import secrets

import matplotlib.pyplot as plt
import numpy as np
import torch
from config.s3 import AWS_BUCKET, s3
from fastapi.responses import JSONResponse
from schemas import Response
from torch import nn


def plot_decision_boundary(model: torch.nn.Module, X: torch.Tensor, y: torch.Tensor):
    """Plots decision boundaries of model predicting on X in comparison to y.

    Source - https://madewithml.com/courses/foundations/neural-networks/ (with modifications)
    """
    # Put everything to CPU (works better with NumPy + Matplotlib)
    model.to("cpu")
    X, y = X.to("cpu"), y.to("cpu")

    # Setup prediction boundaries and grid
    x_min, x_max = X[:, 0].min() - 0.1, X[:, 0].max() + 0.1
    y_min, y_max = X[:, 1].min() - 0.1, X[:, 1].max() + 0.1
    xx, yy = np.meshgrid(np.linspace(x_min, x_max, 101), np.linspace(y_min, y_max, 101))

    # Make features
    X_to_pred_on = torch.from_numpy(np.column_stack((xx.ravel(), yy.ravel()))).float()

    # Make predictions
    model.eval()
    with torch.inference_mode():
        y_logits = model(X_to_pred_on)

    # Test for multi-class or binary and adjust logits to prediction labels
    if len(torch.unique(y)) > 2:
        y_pred = torch.softmax(y_logits, dim=1).argmax(dim=1)  # mutli-class
    else:
        y_pred = torch.round(torch.sigmoid(y_logits))  # binary

    # Reshape preds and plot
    y_pred = y_pred.reshape(xx.shape).detach().numpy()
    plt.contourf(xx, yy, y_pred, cmap=plt.cm.RdYlBu, alpha=0.7)
    plt.scatter(X[:, 0], X[:, 1], c=y, s=40, cmap=plt.cm.RdYlBu)
    plt.xlim(xx.min(), xx.max())
    plt.ylim(yy.min(), yy.max())


def plot_train_graph(x, y_train, y_test):
    plt.figure(figsize=(10, 7))

    plt.plot(x, y_train, color="red", label="Train Loss")

    # plot test loss
    plt.plot(x, y_test, color="green", label="Test Loss")

    plt.title("Training and test loss curves")
    plt.ylabel("Loss")
    plt.xlabel("Epochs")
    plt.legend()


def calculate_accuracy(y_true, y_pred):
    correct = torch.eq(y_true, y_pred).sum().item()
    acc = (correct / len(y_pred)) * 100
    return acc


def getDemoMultiClassCSVData():
    header = "X1, X2, L"

    X_blob, y_blob = getDemoMultiClassData()

    y_blob = y_blob.reshape(-1, 1)

    combined_array = np.hstack((X_blob, y_blob))
    np.savetxt(
        "output.csv",
        combined_array,
        delimiter=",",
        header=header,
        comments="",
        fmt="%.8f",
    )


def getPresetConfigurations():
    return {
        "name": "user11",
        "optimizer": "sgd",
        "classification_type": "binary",
        "learning_rate": 0.1,
        "epochs": 500,
        "layer_sizes": [2, 8, 8, 4],
        "batch_size": 32,
    }


def handle_exception(exc):
    if hasattr(exc, "status_code"):
        status_code = exc.status_code
    else:
        status_code = 500

    if hasattr(exc, "detail"):
        detail = exc.detail
    else:
        print("[Exepction: " + str(exc) + " ]")
        detail = "Something went wrong"

    content = {"code": status_code, "status": "Error", "message": detail}

    return JSONResponse(status_code=status_code, content=content)


def handle_response(status_code: int, data):
    status_code = status_code if status_code is not None else 200

    content = {"code": status_code, "status": "success", "data": data}

    return JSONResponse(status_code=status_code, content=content)

def generateKeyForS3(name:str):
    random_string = secrets.token_hex(8)
    unique_key = f"{name}{random_string}"
    return unique_key
    

def saveModelToS3(object_key:str, state_dict):
    buffer = io.BytesIO()
    torch.save(state_dict, buffer)
    buffer.seek(0)

    s3.upload_fileobj(buffer, AWS_BUCKET, object_key + ".pth")

    buffer.close()

def saveTrainTestGraphInS3(epochs, y_train, y_test, name):
    plt.figure(figsize=(10, 7))

    plt.plot(epochs, y_train, color="red", label="Train Loss")

    plt.plot(epochs, y_test, color="green", label="Test Loss")

    plt.title("Training and test loss curves")
    plt.ylabel("Loss")
    plt.xlabel("Epochs")
    plt.legend()

    buffer = io.BytesIO()

    plt.savefig(buffer, format='png')
    buffer.seek(0)

    object_key = generateKeyForS3(name) + ".png"

    s3.upload_fileobj(buffer, AWS_BUCKET, object_key)

    buffer.close()

    return object_key