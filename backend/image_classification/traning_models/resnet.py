import torchvision.models as models
from torch import nn


def ResnetModel18(num_classes, pretrained):
    resnet_model = models.resnet18(pretrained)
    num_features = resnet_model.fc.in_features
    resnet_model.fc = nn.Linear(num_features, num_classes) 
    return resnet_model

def ResnetModel34(num_classes, pretrained):
    resnet_model = models.resnet34(pretrained)
    num_features = resnet_model.fc.in_features
    resnet_model.fc = nn.Linear(num_features, num_classes) 
    return resnet_model