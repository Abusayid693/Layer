import torch
import torchvision.models as models
from torch import nn

from .constant import MOBILE_NET, RESNET_18, RESNET_34, TINY_VVG


# Tiny VVG model
class VVGModelV2(nn.Module):
    def __init__(self, input_shape, hidden_units, output_shape, flat_layer_units):
        super().__init__()

        self.conv_block_1 = nn.Sequential(
            nn.Conv2d(in_channels=input_shape, 
                      out_channels=hidden_units, 
                      kernel_size=3,
                      stride=1,
                      padding=1 # same padding value
                     ),
            nn.ReLU(),
            nn.Conv2d(in_channels=hidden_units, 
                      out_channels=hidden_units, 
                      kernel_size=3,
                      stride=1,
                      padding=1 # same padding value
                     ),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2) # 27
        )
        self.conv_block_2 = nn.Sequential(
            nn.Conv2d(in_channels=hidden_units, 
                      out_channels=hidden_units, 
                      kernel_size=3,
                      stride=1,
                      padding=1 # same padding value
                     ),
            nn.ReLU(),
            nn.Conv2d(in_channels=hidden_units, 
                      out_channels=hidden_units, 
                      kernel_size=3,
                      stride=1,
                      padding=1 # same padding value
                     ),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2) # 26
        )
        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(in_features=hidden_units*flat_layer_units*flat_layer_units, out_features=output_shape),
        )
        
    def forward(self, x):
        x  = self.conv_block_1(x)
        x = self.conv_block_2(x)
        x = self.classifier(x) 
        return x
    
def MobilenetModel(num_classes):
    mobilenet_v2 = models.mobilenet_v2(pretrained=True)
    num_classes = num_classes
    mobilenet_v2.classifier[1] = nn.Linear(mobilenet_v2.last_channel, num_classes)
    return mobilenet_v2

def ResnetModel(num_classes):
    resnet_model = models.resnet18(pretrained=True)
    num_features = resnet_model.fc.in_features
    resnet_model.fc = nn.Linear(num_features, num_classes) 
    return resnet_model


def configure_training_params(config:dict[str, str], model):

    if(config["optimizer"] == "sgd"):
        optimizer = torch.optim.SGD(params = model.parameters(), lr=config["learning_rate"])
    else:
        optimizer = torch.optim.Adam(params = model.parameters(), lr=config["learning_rate"])

    loss_fn = nn.CrossEntropyLoss()

    return  optimizer, loss_fn

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

