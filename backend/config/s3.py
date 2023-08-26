import os

import boto3

AWS_ID = os.environ.get('AWS_ACCESS_KEY')
AWS_SECRET = os.environ.get('AWS_SECRET')
AWS_BUCKET= os.environ.get('AWS_S3_BUCKET')

s3 = boto3.client("s3", aws_access_key_id=AWS_ID, aws_secret_access_key=AWS_SECRET)
