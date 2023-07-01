from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
from sqlalchemy.exc import SQLAlchemyError
import os

load_dotenv()

DATABASE_URL = f"postgresql://{os.environ.get('POSTGRES_USER')}:{os.environ.get('POSTGRES_PASSWORD')}@postgres:5432/{os.environ.get('POSTGRES_DB')}"

try:
    engine = create_engine(DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base = declarative_base()
except SQLAlchemyError as e:
    print("An error occurred in database connection:", str(e))


def get_db():
    db = SessionLocal()
    try:
        yield db
    except SQLAlchemyError as e:
        print("An error occurred in get_db:", str(e))
    finally:
        db.close()
