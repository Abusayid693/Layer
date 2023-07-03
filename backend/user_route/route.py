from fastapi import APIRouter, HTTPException, Path
from fastapi import Depends
from db import engine, SessionLocal
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from .helper import create_user, login_user
from db_models.user.schema import Request, LoginRequest
import db

router = APIRouter()


@router.post("/create")
async def create(request: Request, db: Session = Depends(db.get_db)):
    try:
        create_user(db, data=request)
    except Exception as e:
        return JSONResponse(
            {"Result": "Something went wrong " + str(e) + " " + str(request)}
        )
    return JSONResponse({"Result": "Book inserted"})


@router.post("/login")
async def create(request: LoginRequest, db: Session = Depends(db.get_db)):
    try:
        data = login_user(db, data=request)
    except Exception as e:
        return JSONResponse(
            {"Result": "Something went wrong " + str(e) + " " + str(request)}
        )
    return JSONResponse({"Result": data})
