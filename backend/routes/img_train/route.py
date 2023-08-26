import db
from fastapi import APIRouter, Depends, Request
from image_classification.preprocess import getZipFileFromAws
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

imageRouter = APIRouter()


@imageRouter.post("/train")
async def create(request: Request, db: Session = Depends(db.get_db)):
    try:
        await getZipFileFromAws()
        print("Image train")
    except Exception as e:
        print('e:', e)
        return handle_exception(e)
    return handle_response(status_code=201, data="training started")

