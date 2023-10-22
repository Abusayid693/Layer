import os

import boto3
from botocore.client import Config

AWS_ID = os.environ.get('AWS_ACCESS_KEY')
AWS_SECRET = os.environ.get('AWS_SECRET')
AWS_BUCKET= os.environ.get('AWS_S3_BUCKET')
AWS_S3_REGION_NAME = "ap-south-1"


s3 = boto3.client("s3", aws_access_key_id=AWS_ID, aws_secret_access_key=AWS_SECRET)


s3version4 = boto3.client('s3',config=Config(signature_version='s3v4'),region_name=AWS_S3_REGION_NAME, aws_access_key_id=AWS_ID, aws_secret_access_key=AWS_SECRET)

# s3.upload_fileobj(file,app.config["AWS_BUCKET_NAME"],file.filename)
# url = s3.generate_presigned_url('get_object', Params = {'Bucket':app.config["AWS_BUCKET_NAME"] , 'Key': file.filename}, ExpiresIn = 10000)