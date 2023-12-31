import torch
import util

from .helpers import normalizePredictions


def fit_model(config, model, loss_fn, optimizer, train_dataloader, test_data_loader):
  train_epochs = []
  train_loss_arr = []
  test_loss_arr = []

  train_acc_arr = []

  test_acc_arr = []
 
  test_dataloader = test_data_loader

  for epoch in range(config["epochs"]):
    
    train_loss = 0
    train_acc = 0
    
    print(f"Epoch: {epoch}\n----------")
    
    train_epochs.append(epoch)
    
    for batch, (X, Y) in enumerate(train_dataloader):
    
        
        model.train()
        
        y_logits_train = model(X)
        
        loss = loss_fn(y_logits_train, Y)
        
        y_pred_train = normalizePredictions(y_logits_train)
        
        train_loss+=loss
        
        train_acc+=util.calculate_accuracy(Y ,y_pred_train)
        
        optimizer.zero_grad()
        
        loss.backward()
        
        optimizer.step()
        
        model.eval()
        
        if batch % 10 == 0:
            print(f"batch : {batch}")
            
    # Average train_loss        
    train_loss /= len(train_dataloader)
    train_acc /= len(train_dataloader)
    
    train_loss_arr.append(train_loss.item())
    train_acc_arr.append(train_acc)
    
    print(f"Train loss for {epoch}: {train_loss} | Train acc: {train_acc}")
    
    ### Testing
    
    test_loss, test_acc = 0, 0
    
    with torch.inference_mode():
        for X_test, Y_test in test_dataloader:
            
            y_logits_test = model(X_test)
        
            test_loss = loss_fn(y_logits_test, Y_test)
            
            test_loss+=test_loss
            
            y_pred_test = normalizePredictions(y_logits_test)
            
            test_acc+=util.calculate_accuracy(Y_test ,y_pred_test)
            
        test_loss/=len(test_dataloader)
        test_acc/=len(test_dataloader)
        
        test_loss_arr.append(test_loss.item())
        test_acc_arr.append(test_acc)
        
        
        print(f"Test loss for {epoch}: {test_loss}, Test acc: {test_acc}")
        
  return train_loss_arr, test_loss_arr, train_acc_arr, test_acc_arr, train_epochs
