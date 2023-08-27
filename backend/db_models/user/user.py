import bcrypt
from db import Base, get_static_session
from db_models.saved_models.model import *
from fastapi import HTTPException
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship, validates


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    email = Column(String(50), unique=True)
    password = Column(String(200), nullable=False) 

    saved_model = relationship("SavedModel", back_populates="user")

    @validates("name")
    def validate_name(self, key, name):
        if len(name) < 3:
            raise HTTPException(
                status_code=400, detail="Name must be at least 3 characters long."
            )
        if not name.isalnum():
            raise HTTPException(
                status_code=400,
                detail="The username should only contain alphanumeric characters",
            )
        return name

    @validates("email")
    def validate_email(self, key, email):
        session = get_static_session()
        existing_record = session.query(User).filter(User.email == email).first()
        if existing_record:
            raise HTTPException(
                status_code=409, detail="User with that email already exists"
            )
        return email

    @validates("password")
    def validate_password(self, key, password):
        if len(password) < 5:
            raise HTTPException(
                status_code=400, detail="Name must be at least 5 characters long."
            )
        salt = bcrypt.gensalt()
        password_hash = bcrypt.hashpw(password.encode("utf-8"), salt)
        return password_hash.decode("utf-8")

    def compare_password(self, password):
        return bcrypt.checkpw(password.encode("utf-8"), self.password.encode("utf-8"))
