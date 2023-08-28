from fastapi import Request


def check_permission(request:Request):
    auth = request.headers.get('Authorization') 
    scheme, data = (auth or ' ').split(' ', 1)
    if scheme != 'Basic': 
        return False
