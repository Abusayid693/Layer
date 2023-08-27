import csv_classification
import db
from celery_worker import addCsvClassificationTask
from config.constant import (CSV_MULTI_CLASS_CLASSIFICATION,
                             CSV_SINGLE_CLASS_CLASSIFICATION)
from db_models.saved_models.controller import create_model_db_instance
from db_models.saved_models.schema import SavedModelSchema
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

csv_router = APIRouter()


@csv_router.post("/train")
async def hello(request: Request, db: Session = Depends(db.get_db)):
    try:
        config_data = await request.json()

        await csv_classification.verify_data_format(config_data)

        last_layer_idx = len(config_data["layer_sizes"]) - 1

        dict_data = {
            "name": config_data["name"],
            "user_id": config_data["user_id"],
            "classification_type": CSV_MULTI_CLASS_CLASSIFICATION
            if config_data["layer_sizes"][last_layer_idx] > 1
            else CSV_SINGLE_CLASS_CLASSIFICATION,
        }
        dict = SavedModelSchema(**dict_data)

        training_instance_id = create_model_db_instance(db, data=dict)

        addCsvClassificationTask.delay(config_data, training_instance_id)
        return handle_response(
            status_code=200,
            data="Training started in the background, id :" + str(training_instance_id),
        )
    except Exception as e:
        return handle_exception(e)
