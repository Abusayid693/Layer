import db
from celery_worker import addImageClassificationTask
from config.constant import IMAGE_CLASSIFICATION
from db_models.saved_models.controller import create_model_db_instance
from db_models.saved_models.schema import SavedModelSchema
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

imageRouter = APIRouter()


@imageRouter.post("/train")
async def create(request: Request, db: Session = Depends(db.get_db)):
    try:
        config_data = await request.json()

        config_data["name"] = config_data["name"] + " image classification"

        dict_data = {
            "name": config_data["name"],
            "user_id": config_data["user_id"],
            "classification_type": IMAGE_CLASSIFICATION
        }
        dict = SavedModelSchema(**dict_data)

        training_instance_id = create_model_db_instance(db, data=dict)

        addImageClassificationTask.delay(config_data, training_instance_id)

    except Exception as e:
        return handle_exception(e)
    return handle_response(
        status_code=200,
        data="Training started in the background, id :" + str(training_instance_id),
    )
