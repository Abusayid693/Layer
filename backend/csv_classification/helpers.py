import torch
import torch.nn as nn
from pathlib import Path
import sklearn
from sklearn.datasets import make_blobs
from sklearn.datasets import make_circles

def getSequentialLayer(layer_sizes: list[int]):
    layers = []
    for i in range(len(layer_sizes) - 1):
        in_features = layer_sizes[i]
        out_features = layer_sizes[i + 1]
        layer = nn.Linear(in_features, out_features)
        layers.append(layer)

        if i < (len(layer_sizes) - 2):
            layers.append(nn.ReLU())

    return layers


def normalizePredictionsMulticlass(y_pred):
    vals = torch.softmax(y_pred, dim=1)
    return torch.argmax(vals, dim=1)


def normalizePredictions(y_pred):
    vals = torch.sigmoid(y_pred)
    return torch.round(vals).squeeze()


def saveModelStateDict(name: str, model):
    MODEL_PATH = Path("Models")
    MODEL_PATH.mkdir(parents=True, exist_ok=True)
    MODEL_NAME = name + ".pth"
    MODEL_SAVE_PATH = MODEL_PATH / MODEL_NAME
    torch.save(obj=model.state_dict(), f=MODEL_SAVE_PATH)


def getDemoBinaryData():
    X, y = make_circles(1000, noise=0.03, random_state=42)
    return X, y

def getDemoMultiClassData():
    NUM_CLASSES = 4
    NUM_FEATURES = 2
    RANDOM_SEED = 42

    X_blob, y_blob = make_blobs(n_samples=1000, 
                            n_features=NUM_FEATURES, 
                            centers=NUM_CLASSES, 
                            cluster_std=1.5, 
                            random_state=RANDOM_SEED)
    
    return X_blob, y_blob