from fastapi import FastAPI
import uvicorn
import csv_classification
from fastapi import FastAPI, Request
import asyncio
from celery_worker import create_task, addCsvClassificationTask
from fastapi.responses import JSONResponse
import util
from dotenv import load_dotenv
import model
from db import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi import Depends
import crud


load_dotenv()

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/api/db")
async def create(db: Session = Depends(get_db)):
    crud.create_book(db)
    return JSONResponse({"Result": "Book inserted"})

@app.get("/api/test")
def run_task():
    amount = 100
    x = 1
    y = 1
    task = create_task.delay(amount, x, y)
    return JSONResponse({"Result": "processing"})


@app.get("/api/hello")
async def hello():
    config = util.getPresetConfigurations()
    await csv_classification.verify_data_format(config)
    data, label, config = csv_classification.getDataFromCSV(config)
    csv_classification.train_csv_classification(config, data, label)
    return {"message": "Training started in the background. "}


@app.post("/api/csv")
async def hello(request: Request):
    config_data = await request.json()
    await csv_classification.verify_data_format(config_data)

    addCsvClassificationTask.delay(config_data)
    return {"message": "Training started in the background."}


# Press the green button in the gutter to run the script.
if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="0.0.0.0")
