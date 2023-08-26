from torch.utils.data import DataLoader

from .classification import MobilenetModel, configure_training_params
from .model import fit_model


async def train_image_classification(dataset, config):

    print("train_image_classification started")

    data_loader = DataLoader(dataset, batch_size=config["batch_size"], shuffle=True)

    model = MobilenetModel(3)

    optimizer, loss_fn = configure_training_params(config, model)

    (
        train_loss_arr,
        test_loss_arr,
        train_acc_arr,
        test_acc_arr,
        train_epochs,
    ) = await fit_model(config, model, loss_fn, optimizer, data_loader)

    print("train_image_classification ended")
    return ""