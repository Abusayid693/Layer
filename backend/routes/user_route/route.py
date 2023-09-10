import db
from db_models.user.controller import get_user_by_id
from db_models.user.schema import LoginRequest, UserRequest
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from util import handle_exception, handle_response

from .helper import create_user, login_user

userRouter = APIRouter()

userRouterProtected = APIRouter()


@userRouter.post("/create")
async def create(request: UserRequest, db: Session = Depends(db.get_db)):
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


@userRouterProtected.get("/me")
async def me(request: Request, db: Session = Depends(db.get_db)):
    try:
        userId = request.state.auth_user 
        data = get_user_by_id(db, userId)
        print('me :', data)
    except Exception as e:
         return handle_exception(e)
    
    return handle_response(status_code=200, data=data)