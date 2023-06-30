import os
import time
import csv_classification
from celery import Celery
from kombu.serialization import register, registry
import numpy as np

celery = Celery(__name__)
celery.conf.broker_url = "redis://redis:6379/0"
celery.conf.result_backend = "redis://redis:6379/0"


@celery.task(name="create_task")
def create_task(a, b, c):
    time.sleep(a)
    return b + c

config = {
    "name": "user11111",
    "optimizer": "sgd",
    "classification_type": "binary",
    "learning_rate": 0.1,
    "epochs": 500,
    "layer_sizes": [2, 8, 8, 4],
    "batch_size": 32,
}

def func():
    np.array([1, 2, 3])
    data, label = csv_classification.processCsvData(config)
    print("processCsvData ended")
    csv_classification.train_csv_classification(config, data, label)
    print("csv_classification ended")
    return "OK"

@celery.task(name="addCsvClassificationTask")
def addCsvClassificationTask():
    func()
    return 5 + 10