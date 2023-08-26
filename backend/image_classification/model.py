import torch
import util
from torch import nn

from .helpers import normalizePredictions

epochs = 10

async def fit_model(config, mobilenet_v2, loss_fn, optimizer, train_dataloader):
  train_epochs = []
  train_loss_arr = []
  test_loss_arr = []

  train_acc_arr = []

  test_acc_arr = []
 
  test_dataloader = train_dataloader

  for epoch in range(epochs):
    
    train_loss = 0
    train_acc = 0
    
    print(f"Epoch: {epoch}\n----------")
    
    train_epochs.append(epoch)
    
    for batch, (X, Y) in enumerate(train_dataloader):
    
        
        mobilenet_v2.train()
        
        y_logits_train = mobilenet_v2(X)
        
        loss = loss_fn(y_logits_train, Y)
        
        y_pred_train = normalizePredictions(y_logits_train)
        
        train_loss+=loss
        
        train_acc+=util.calculate_accuracy(Y ,y_pred_train)
        
        optimizer.zero_grad()
        
        loss.backward()
        
        optimizer.step()
        
        mobilenet_v2.eval()
        
        if batch % 10 == 0:
            print(f"batch : {batch}")
            
    # Average train_loss        
    train_loss /= len(train_dataloader)
    train_acc /= len(train_dataloader)
    
    train_loss_arr.append(train_loss.item())
    
    print(f"Train loss for {epoch}: {train_loss} | Train acc: {train_acc}")
    
    ### Testing
    
    test_loss, test_acc = 0, 0
    
    with torch.inference_mode():
        for X_test, Y_test in test_dataloader:
            
            y_logits_test = mobilenet_v2(X_test)
        
            test_loss = loss_fn(y_logits_test, Y_test)
            
            test_loss+=test_loss
            
            y_pred_test = normalizePredictions(y_logits_test)
            
            test_acc+=util.calculate_accuracy(Y_test ,y_pred_test)
            
        test_loss/=len(test_dataloader)
        test_acc/=len(test_dataloader)
        
        test_loss_arr.append(test_loss.item())
        
        print(f"Test loss for {epoch}: {test_loss}, Test acc: {test_acc}")
        
  return train_loss_arr, test_loss_arr, train_acc_arr, test_acc_arr, train_epochs
