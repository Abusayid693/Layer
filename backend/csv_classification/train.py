import torch
import sklearn
from sklearn.model_selection import train_test_split
from torch.utils.data import DataLoader
from torch.utils.data import TensorDataset
from fastapi import FastAPI
from .helpers import saveModelStateDict
from .classification import CSVClassificationMo, configure_training_params
from .model import fit_model
from db_models.saved_models.controller import update_model_db_instance
import db


def train_csv_classification(config, data, label):
    X_blob = torch.from_numpy(data).type(torch.float)
    y_blob = (
        torch.from_numpy(label).type(torch.float)
        if config["classification_type"] == "binary"
        else torch.from_numpy(label).type(torch.long)
    )

    X_train, X_test, Y_train, Y_test = train_test_split(X_blob, y_blob, test_size=0.2)

    dataset = TensorDataset(X_train, Y_train)

    data_loader = DataLoader(dataset, batch_size=config["batch_size"], shuffle=True)

    model = CSVClassificationMo(config["layer_sizes"])

    optimizer, loss_fn = configure_training_params(config, model)

    fit_model(config, model, loss_fn, optimizer, data_loader, X_test, Y_test)

    print("fit_model complete")

    saveModelStateDict(config["name"], model)

    print("Model saved")

    update_model_db_instance(
        db.get_static_session(),
        {
            "id": config["training_instance_id"],
            "status": "Success",
            "message": "Training successfully completed",
        },
    )

    return {"tes": "complete"}
