from torch import nn


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