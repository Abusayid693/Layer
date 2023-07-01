from typing import List, Optional, TypeVar, Generic
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T = TypeVar("T")

class UserSchema(BaseModel):
    id: Optional[int] = None
    name: str = None
    email: str = None
    password: str = None

    class Config:
        orm_mode = True


class Request(GenericModel, Generic[T]):
    name: str
    email: str
    password: str

class LoginRequest(GenericModel, Generic[T]):
    email: str
    password: str