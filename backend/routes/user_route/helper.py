import datetime
import os

import jwt
from db_models.user.schema import LoginRequest, UserSchema
from db_models.user.user import User
from fastapi import HTTPException
from sqlalchemy.orm import Session


def create_user(db: Session, data: UserSchema):
    _user = User(name=data.name, email=data.email, password=data.password)
    db.add(_user)
    db.commit()
    db.refresh(_user)
    return _user


def login_user(db: Session, data: LoginRequest):
    user = db.query(User).filter_by(email=data.email).first()

    if user and user.compare_password(data.password):
        payload = {
        "user_id": 123,
        "exp": datetime.datetime.utcnow()
        + datetime.timedelta(hours=100),  # Token expiration time
        }
        
        token = jwt.encode(payload, os.environ.get('JWT_SECRET'), algorithm='HS256')
        print("Token:", token)
        return {"token": token}
    else:
        raise HTTPException(status_code=401, detail="Invalid crediantials")
