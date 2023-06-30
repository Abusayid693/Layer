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


@celery.task(name="addCsvClassificationTask")
def addCsvClassificationTask(config):
    data, label, config = csv_classification.getDataFromCSV(config)
    csv_classification.train_csv_classification(config, data, label)
    return "OK"
