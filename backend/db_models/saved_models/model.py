from sqlalchemy import Column, Integer, String, ForeignKey
from db import Base, get_static_session
from sqlalchemy.orm import relationship
from db_models.user.user import *

class SavedModel(Base):
    __tablename__ = "saved_model"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    user_id = Column(Integer, ForeignKey('user.id'), nullable=False)

    status = Column(String(50))
    message = Column(String(250))

    model_url = Column(String(250))
    train_config = Column(String(300)) # in string format
    dataset_url = Column(String(250))

    # metrics
    accuracy_graph_url = Column(String(250))
    train_loss_graph_url = Column(String(250))
    test_loss_graph_url = Column(String(250))

    classification_type = Column(String(50)) # csv_classification, image_classification

    user = relationship("User", back_populates="saved_model")