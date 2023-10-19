import db
from config.s3 import AWS_BUCKET, s3
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

@userRouter.post("/get-signed-url")
async def me(request: Request, db: Session = Depends(db.get_db)):
    try:

        req_data = await request.json()

        presigned_url = s3.generate_presigned_url(
        'put_object',
        Params={'Bucket': AWS_BUCKET, 'Key': req_data["object_key"]},
        ExpiresIn=3600,  # URL expiration time in seconds (1 hour in this example)
        )
        print("Generated pre-signed URL:", presigned_url)
    except Exception as e:
         return handle_exception(e)
    
    return handle_response(status_code=200, data=presigned_url)


@userRouterProtected.get("/me")
async def me(request: Request, db: Session = Depends(db.get_db)):
    try:
        userId = request.state.auth_user 
        data = get_user_by_id(db, userId)
        print('me :', data)
    except Exception as e:
         return handle_exception(e)
    
    return handle_response(status_code=200, data=data)