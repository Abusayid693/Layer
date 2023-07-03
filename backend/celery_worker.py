import os
import time
import csv_classification
from celery import Celery, states
from kombu.serialization import register, registry
from db_models.saved_models.controller import update_model_db_instance
import db
from celery.exceptions import Ignore

celery = Celery(__name__, broker_connection_retry_on_startup=True)
celery.conf.broker_url = "redis://redis:6379/0"
celery.conf.result_backend = "redis://redis:6379/0"


@celery.task(name="create_task")
def create_task(a, b, c):
    time.sleep(a)
    return b + c


@celery.task(name="addCsvClassificationTask")
def addCsvClassificationTask(config, training_instance_id):
    try:
        print("Task started to excute : " + str(training_instance_id))
        update_model_db_instance(
            db.get_static_session(),
            {
                "id": training_instance_id,
                "status": "Training",
                "message": "Celery worker started training",
            },
        )
        config["training_instance_id"] = training_instance_id
        data, label, config = csv_classification.getDataFromCSV(config)
        csv_classification.train_csv_classification(config, data, label)
        
    except Exception as e:
        update_model_db_instance(  
            db.get_static_session(),
            {
                "id": training_instance_id,
                "status": states.FAILURE,
                "message": "Celery failed to run task",
            },
        )
        raise Ignore()
    return "OK"
