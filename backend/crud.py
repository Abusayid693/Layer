from sqlalchemy.orm import Session
from model import Book
from schemas import BookSchema


def create_book(db: Session):
    _book = Book(title="Rehan", description="This is demo book")
    db.add(_book)
    db.commit()
    db.refresh(_book)
    return _book