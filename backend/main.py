from fastapi import FastAPI
import uvicorn
import csv_classification
from fastapi import BackgroundTasks, FastAPI
import asyncio
processing_tasks = False

task_queue = asyncio.Queue()
app = FastAPI()
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

config = {
    "name": "user10",
    "optimizer": "sgd",
    "classification_type": "binary",
    "learning_rate": 0.1,
    "epochs": 1500,
    "layer_sizes": [2, 8, 8, 4],
    "batch_size": 32,
}

def run_task(task, *params):
    asyncio.create_task(task(*params))

async def process_tasks():
    global processing_tasks

    # Check if any tasks are in the queue
    while not task_queue.empty():
        # Get the next task from the queue
        task, *params = await task_queue.get()

        # Run the task
        # await task(*params)
        run_task(task, *params)

    processing_tasks = False


@app.get("/api/hello")
async def hello(background_tasks: BackgroundTasks):

    data, label =  await csv_classification.processCsvData(config)

    # await csv_classification.train_csv_classification(config, data, label, task_queue)

    task_queue.put_nowait((csv_classification.train_csv_classification , config, data, label, task_queue))

    global processing_tasks
    if not processing_tasks:
        processing_tasks = True
        background_tasks.add_task(process_tasks)

    return {"message": "Training started in the background. "}


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f"Hi, {name}")  # Press ⌘F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="0.0.0.0")
