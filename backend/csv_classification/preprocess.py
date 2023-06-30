from fastapi import FastAPI, HTTPException
from .helpers import readCsvFile, isAllNumerical, getExpectedLastLayerNeurons
import numpy as np
from .constant import BINARY, MULTICLASS


def processCsvData(config):
    data = readCsvFile("")

    rows, cols = data.shape

    if cols < 2:
        raise HTTPException(status_code=404, detail="Minimum 2 cols in csv")

    if config["layer_sizes"][0] != cols - 1:
        raise HTTPException(
            status_code=404,
            detail="Invaild first layer size, expected "
            + cols - 1
            + ", but got "
            + str(config["layer_sizes"][0])
        )
        

    if not isAllNumerical(data):
        raise HTTPException(
            status_code=404, detail="Invalid data, all csv values must be numericals"
        )

    X_data = data[:, :-1]
    Y_data = data[:, -1]

    unique_labels = np.unique(Y_data)

    if unique_labels.size < 2:
        raise HTTPException(
            status_code=404,
            detail="Insufficent labels, expected atlest 2 unique label but got"
            + str(unique_labels.size),
        )

    last_layer_idx = len(config["layer_sizes"]) - 1

    if config["layer_sizes"][last_layer_idx] != getExpectedLastLayerNeurons(
        unique_labels.size
    ):
        raise HTTPException(
            status_code=404,
            detail="Invaild last layer size, expected "
            + str(getExpectedLastLayerNeurons(unique_labels.size))
            + ", but got "
            + str(config["layer_sizes"][last_layer_idx]),
        )

    config["classification_type"] = MULTICLASS if (unique_labels.size > 2) else BINARY

    return X_data, Y_data
