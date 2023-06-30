import torch
import sklearn
from sklearn.model_selection import train_test_split

from .helpers import getDemoBinaryData, getDemoMultiClassData
from .classification import CSVClassificationMo, configure_training_params
from .model import fit_model


def train_csv_classification(config):
    data, label = (
        getDemoBinaryData()
        if config["classification_type"] == "binary"
        else getDemoMultiClassData()
    )

    X_blob = torch.from_numpy(data).type(torch.float)
    y_blob = (
        torch.from_numpy(label).type(torch.float)
        if config["classification_type"] == "binary"
        else torch.from_numpy(label).type(torch.long)
    )

    X_train, X_test, Y_train, Y_test = train_test_split(X_blob, y_blob, test_size=0.2)

    model = CSVClassificationMo(config["layer_sizes"])

    optimizer, loss_fn = configure_training_params(config, model)

    fit_model(config, model, loss_fn, optimizer, X_train, Y_train, X_test, Y_test)

    return ""
