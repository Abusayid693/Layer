from fastapi import FastAPI
import uvicorn
import csv_classification


app = FastAPI()
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

config = {
    "name":"user5",
    "optimizer":"sgd",
    "classification_type":"binary",
    "learning_rate": 0.1,
    "epochs": 1500,
    "layer_sizes": [2, 8, 8, 4]
}

@app.get("/api/hello")
async def hello():
    await csv_classification.train_csv_classification(config)
    return {"message": "Hello, World!"}


def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press ⌘F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    uvicorn.run(app)
