import torch
from torch import nn

from .constant import MOBILE_NET, RESNET_18, RESNET_34, TINY_VVG
from .traning_models import MobilenetModel, ResnetModel, VVGModelV2


def getModel(model_name, config):
    if model_name == MOBILE_NET:
        return MobilenetModel(config["num_classes"])
    
    if model_name == TINY_VVG:
        return VVGModelV2(
          input_shape=3,
          hidden_units=20,
          output_shape=config["num_classes"],
          flat_layer_units=config["transform_size"]//4
          )
    
    if model_name == RESNET_18:
        return ResnetModel(config["num_classes"])
    
    return MobilenetModel(config["num_classes"])


def configure_training_params(config:dict[str, str], model):

    if(config["optimizer"] == "sgd"):
        optimizer = torch.optim.SGD(params = model.parameters(), lr=config["learning_rate"])
    else:
        optimizer = torch.optim.Adam(params = model.parameters(), lr=config["learning_rate"])

    loss_fn = nn.CrossEntropyLoss()

    return  optimizer, loss_fn