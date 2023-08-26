import csv_classification
import routes
import util
import uvicorn
from celery_worker import addCsvClassificationTask, create_task
from db import Base, engine
from dotenv import load_dotenv
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

load_dotenv()

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(routes.userRouter, prefix="/auth", tags=["auth"])

app.include_router(routes.csv_router, prefix="/csv", tags=["auth"])

app.include_router(routes.imageRouter, prefix="/image", tags=["image"])

def handle_exception(request, exc):
    if hasattr(exc, "status_code"):
        status_code = exc.status_code
    else:
        status_code = 500

    if hasattr(exc, "message"):
        message = exc.message
    else:
        message = "Internal Server Error"

    return JSONResponse(status_code=status_code, content={"message": message})


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
