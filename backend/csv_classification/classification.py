import torch
from torch import nn

from .helpers import getSequentialLayer 

class CSVClassificationMo(nn.Module):
    def __init__(self, layer_sizes:list[int]):
        super().__init__()
        self.layer_stack = nn.Sequential(
            *getSequentialLayer(layer_sizes)
        )

    def forward(self, x):
        return self.layer_stack(x)
    

def configure_training_params(config:dict[str, str], model):

    if(config["optimizer"] == "sgd"):
        optimizer = torch.optim.SGD(params = model.parameters(), lr=config["learning_rate"])
    else:
        optimizer = torch.optim.Adam(params = model.parameters(), lr=config["learning_rate"])
    
    if(config["classification_type"] == "binary"):
        loss_fn = nn.BCEWithLogitsLoss()
    else:
        # https://pytorch.org/docs/stable/generated/torch.nn.CrossEntropyLoss.html 
        loss_fn = nn.CrossEntropyLoss()

    return  optimizer, loss_fn
    