from sqlalchemy.orm import Session
from db_models.user import User
from db_models.schema import UserSchema, LoginRequest
from fastapi.responses import JSONResponse

def create_user(db: Session, data: UserSchema):
    _user = User(name=data.name, email=data.email, password=data.password)
    db.add(_user)
    db.commit()
    db.refresh(_user)
    return _user

def login_user(db:Session, data:LoginRequest):
    user = db.query(User).filter_by(email=data.email).first()
    if user and user.compare_password(data.password):
        return {"token":"sdsdnsj"}
    else:
        raise ValueError("Invalid crediantials")