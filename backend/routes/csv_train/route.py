from fastapi import APIRouter, HTTPException, Path, Request
import csv_classification
from celery_worker import create_task, addCsvClassificationTask
from .helper import create_model_db_instance
from sqlalchemy.orm import Session
from fastapi import Depends
from db_models.saved_models.schema import SavedModelSchema
import db

csv_router = APIRouter()

@csv_router.post("/train")
async def hello(request: Request, db: Session = Depends(db.get_db)):
    try:
        config_data = await request.json()

        dict_data = {"name" : config_data["name"], "user_id": config_data["user_id"]}
        dict = SavedModelSchema(**dict_data)

        await csv_classification.verify_data_format(config_data)
        create_model_db_instance(db, data=dict)
    except Exception as e:
        return {"message": "Somethin went wrong : " + str(e) + str(config_data)} 

    addCsvClassificationTask.delay(config_data)
    return {"message": "Training started in the background."} 