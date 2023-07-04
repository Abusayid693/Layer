from fastapi import APIRouter, HTTPException, Path, Request
import csv_classification
from celery_worker import addCsvClassificationTask
from sqlalchemy.orm import Session
from fastapi import Depends
from db_models.saved_models.schema import SavedModelSchema
import db
from db_models.saved_models.controller import create_model_db_instance
from csv_classification.helpers import getCsvFileBufferFromPath
from util import handle_exception, handle_response
from fastapi.responses import JSONResponse
from schemas import Response

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


@csv_router.post("/download-csv")
async def hello(request: Request):
    try:
        cols = getCsvFileBufferFromPath("multiclass.csv")
        return {"message": "Training started in the background, cols: " + str(cols)}

    except Exception as e:
        return {"message": "Somethin went wrong : " + str(e)}
