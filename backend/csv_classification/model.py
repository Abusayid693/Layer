import torch
from torch import nn
from .helpers import normalizePredictionsMulticlass, normalizePredictions
import util


def fit_model(config, model, loss_fn, optimizer, train_dataloader, X_test, Y_test):
    torch.manual_seed(42)

    epochs = config["epochs"]

    train_epochs = []
    train_loss_arr = []
    test_loss_arr = []

    for epoch in range(epochs):
        for X_train, Y_train in train_dataloader:
            model.train()

            """
            Raw logits out from model without normalization with sigmod or softmax
            """
            y_logits_train = model(X_train)

            y_logits_train = (
                y_logits_train.squeeze()
                if config["classification_type"] == "binary"
                else y_logits_train
            )

            y_pred_train = (
                normalizePredictions(y_logits_train)
                if config["classification_type"] == "binary"
                else normalizePredictionsMulticlass(y_logits_train)
            )

            train_acc = util.calculate_accuracy(Y_train, y_pred_train)

            loss = loss_fn(y_logits_train, Y_train)

            optimizer.zero_grad()

            loss.backward()

            optimizer.step()

            model.eval()

        with torch.inference_mode():
            y_test_logits = model(X_test)

            y_test_logits = (
                y_test_logits.squeeze()
                if config["classification_type"] == "binary"
                else y_test_logits
            )

            y_test_preds = (
                normalizePredictions(y_test_logits)
                if config["classification_type"] == "binary"
                else normalizePredictionsMulticlass(y_test_logits)
            )

            test_acc = util.calculate_accuracy(Y_test, y_test_preds)

            test_loss = loss_fn(y_test_logits, Y_test)

            if epoch % (epochs / 10) == 0:
                train_epochs.append(epoch)

                train_loss_arr.append(loss.item())

                test_loss_arr.append(test_loss.item())

                print(
                    f"Epoch: {epoch} | Train Loss: {loss:.5f} | Train Acc: {train_acc} | Test Loss: {test_loss:.5f} | Test Acc: {test_acc} "
                )
    return