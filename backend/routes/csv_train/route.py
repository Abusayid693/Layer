import csv_classification
import db
from celery_worker import addCsvClassificationTask
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

        dict_data = {"name": config_data["name"], "user_id": config_data["user_id"]}
        dict = SavedModelSchema(**dict_data)

        training_instance_id = create_model_db_instance(db, data=dict)

        addCsvClassificationTask.delay(config_data, training_instance_id)
        return handle_response(
            status_code=200,
            data="Training started in the background, id :" + str(training_instance_id),
        )
    except Exception as e:
        return handle_exception(e)
