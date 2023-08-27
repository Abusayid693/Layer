import json

import db
import torch
import util
from db_models.saved_models.controller import update_model_db_instance
from sklearn.model_selection import train_test_split
from torch.utils.data import DataLoader, TensorDataset

from .classification import CSVClassificationMo, configure_training_params
from .model import fit_model


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

    (
        train_loss_arr,
        test_loss_arr,
        train_acc_arr,
        test_acc_arr,
        train_epochs,
    ) = fit_model(config, model, loss_fn, optimizer, data_loader, X_test, Y_test)

    print("fit_model complete")

    # saveModelStateDict(config["name"], model)
    model_upload_key = util.generateKeyForS3(config["name"])
    util.saveModelToS3(object_key=model_upload_key, state_dict=model.state_dict())

    loss_graph_url = util.saveTrainTestGraphInS3(
        train_epochs, train_loss_arr, test_loss_arr, config["name"] + "loss_graph"
    )
    acc_graph_url = util.saveTrainTestGraphInS3(
        train_epochs, train_acc_arr, test_acc_arr, config["name"] + "acc_graph"
    )

    print("Model saved in s3")

    update_model_db_instance(
        db.get_static_session(),
        {
            "id": config["training_instance_id"],
            "model_url": model_upload_key + ".pth",
            "accuracy_graph_url": acc_graph_url,
            "train_loss_graph_url": loss_graph_url,
            "status": "Success",
            "message": "Training successfully completed",
            "train_config": json.dumps(config)
        },
    )

    return {"tes": "complete"}
