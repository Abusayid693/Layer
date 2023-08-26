import io
import zipfile

import torch
from config.s3 import AWS_BUCKET, s3
from PIL import Image
from torch.utils.data import TensorDataset
from torchvision import transforms


async def getZipFileFromAws(file_keys=["pizza", "steak", "sushi"]):
    data = []
    labels = []

    for label_index, file_key in enumerate(file_keys):

     response = s3.get_object(Bucket=AWS_BUCKET, Key=file_key+".zip")
     zip_bytes = response['Body'].read()
    
     with zipfile.ZipFile(io.BytesIO(zip_bytes)) as zip_ref:
        file_names = [name for name in zip_ref.namelist() if name.endswith('.jpg') and any(name.startswith(prefix) for prefix in file_keys)]
        transform = transforms.Compose([
         transforms.Resize((128, 128)),
         transforms.ToTensor(),
       ])
 
        for file_name in file_names:
             with zip_ref.open(file_name) as img_file:
              img = Image.open(img_file)
              img_tensor = transform(img)
              img_tensor = transform(img)
              data.append(img_tensor)
              labels.append(label_index)
 
    tensor_dataset = TensorDataset(torch.stack(data), torch.tensor(labels))
    
    print(labels, len(tensor_dataset))

    return tensor_dataset