import boto3

AWS_ID = "AKIA5CFV7QMLRDGBKT52"
AWS_SECRET = "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"
AWS_BUCKET="layer-training-data-bucket"

s3 = boto3.client("s3", aws_access_key_id=AWS_ID, aws_secret_access_key=AWS_SECRET)