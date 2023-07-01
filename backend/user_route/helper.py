from sqlalchemy.orm import Session
from db_models.user import User
from db_models.schema import UserSchema


def create_user(db: Session, data: UserSchema):
    _user = User(name=data.name, email=data.email)
    db.add(_user)
    db.commit()
    db.refresh(_user)
    return _user