import torchvision.models as models
from torch import nn


def ResnetModel(num_classes):
    resnet_model = models.resnet18(pretrained=True)
    num_features = resnet_model.fc.in_features
    resnet_model.fc = nn.Linear(num_features, num_classes) 
    return resnet_model