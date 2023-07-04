import db
from db_models.user.schema import LoginRequest, Request
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

from .helper import create_user, login_user

userRouter = APIRouter()


@userRouter.post("/create")
async def create(request: Request, db: Session = Depends(db.get_db)):
    try:
        create_user(db, data=request)
    except Exception as e:
        return handle_exception(e)
    return handle_response(status_code=201, data="user created")


@userRouter.post("/login")
async def create(request: LoginRequest, db: Session = Depends(db.get_db)):
    try:
        data = login_user(db, data=request)
    except Exception as e:
         return handle_exception(e)
    return handle_response(status_code=200, data=data)
