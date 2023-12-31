import torch
from torch import nn

from .constant import MOBILE_NET, RESNET_18, RESNET_34, TINY_VVG
from .traning_models import (MobilenetModel, ResnetModel18, ResnetModel34,
                             VVGModelV2)


def getModel(model_name, config):
    if model_name == MOBILE_NET:
        return MobilenetModel(config["num_classes"], config["pretrained"])
    
    if model_name == TINY_VVG:
        return VVGModelV2(
          input_shape=3,
          hidden_units=20, 
          output_shape=config["num_classes"],
          flat_layer_units=config["transform_size"]//4
          )
    
    if model_name == RESNET_18:
        return ResnetModel18(config["num_classes"], config["pretrained"])
    
    if model_name == RESNET_34:
        return ResnetModel34(config["num_classes"], config["pretrained"])
    
    return MobilenetModel(config["num_classes"], config["pretrained"])


def configure_training_params(config:dict[str, str], model):

    if(config["optimizer"] == "sgd"):
        optimizer = torch.optim.SGD(params = model.parameters(), lr=config["learning_rate"])
    else:
        optimizer = torch.optim.Adam(params = model.parameters(), lr=config["learning_rate"])

    loss_fn = nn.CrossEntropyLoss()

    return  optimizer, loss_fn