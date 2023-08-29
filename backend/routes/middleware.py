import os

import db
import jwt
from db_models.user.controller import get_user_by_id
from fastapi import Request


def check_permission(request:Request):
    auth = request.headers.get('Authorization') 
    scheme, data = (auth or ' ').split(' ', 1)
    if scheme != 'Basic': 
        print('scheme, data: ', scheme, data )
        return False
    try:
     decoded_payload = jwt.decode(data, os.environ.get('JWT_SECRET'), algorithms=['HS256'])
     print("Decoded Payload:", decoded_payload)

     user = get_user_by_id(db.get_static_session(), decoded_payload["user_id"])
    
     print("Decoded Payload:", user)
     return True
    except Exception as e:
      print("Token has expired: ", e)
      return False

