import torchvision.models as models
from torch import nn


def MobilenetModel(num_classes):
    mobilenet_v2 = models.mobilenet_v2(pretrained=True)
    num_classes = num_classes
    mobilenet_v2.classifier[1] = nn.Linear(mobilenet_v2.last_channel, num_classes)
    return mobilenet_v2