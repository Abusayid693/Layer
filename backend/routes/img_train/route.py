import db
from fastapi import APIRouter, Depends, Request
from image_classification.preprocess import getZipFileFromAws
from image_classification.train import train_image_classification
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

imageRouter = APIRouter()


@imageRouter.post("/train")
async def create(request: Request, db: Session = Depends(db.get_db)):
    try:
       config_data = await request.json()
       print("getZipFileFromAws started")
       dataset = await getZipFileFromAws(config_data["file_keys"])
       print("getZipFileFromAws ended")
       await train_image_classification(dataset=dataset, config=config_data)
       print("Image train")
    except Exception as e:
        print('e:', e)
        return handle_exception(e)
    return handle_response(status_code=201, data="training started")

