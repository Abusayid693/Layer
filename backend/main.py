from fastapi import FastAPI
import uvicorn
import csv_classification
from fastapi import FastAPI, Request
import asyncio
from celery_worker import create_task, addCsvClassificationTask
from fastapi.responses import JSONResponse
import util

processing_tasks = False

task_queue = asyncio.Queue()
app = FastAPI()


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
