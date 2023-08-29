from sqlalchemy.orm import Session

from .user import User


def get_user_by_id(db: Session, user_id):
    user = db.query(User).get(user_id)
    return user