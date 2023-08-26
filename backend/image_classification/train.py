from torch.utils.data import DataLoader, random_split

from .classification import MobilenetModel, configure_training_params, getModel
from .model import fit_model


def train_image_classification(dataset, config):

    print("train_image_classification started")

    train_size = int(0.8 * len(dataset)) 
    test_size = len(dataset) - train_size 

    train_dataset, test_dataset = random_split(dataset, [train_size, test_size])
   
    train_data_loader = DataLoader(train_dataset, batch_size=config["batch_size"], shuffle=True)
    
    test_data_loader = DataLoader(test_dataset, batch_size=config["batch_size"], shuffle=True)

    model = getModel(model_name=config["model"], config=config)

    optimizer, loss_fn = configure_training_params(config, model)

    (
        train_loss_arr,
        test_loss_arr,
        train_acc_arr,
        test_acc_arr,
        train_epochs,
    ) = fit_model(config, model, loss_fn, optimizer, train_data_loader, test_data_loader)

    print("train_image_classification ended")
    return ""