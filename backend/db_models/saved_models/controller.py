from sqlalchemy.orm import Session
from .model import SavedModel
from .schema import SavedModelSchema
from fastapi.responses import JSONResponse

def create_model_db_instance(db: Session, data: SavedModelSchema):
    _model = SavedModel(name=data.name, user_id=data.user_id, status="pending", message="Training not started yet")
    db.add(_model)
    db.commit()
    db.refresh(_model)
    return _model.id

def update_model_db_instance(db: Session, data: dict[str, str]):
    id = data["id"]
    _model = db.query(SavedModel).get(id)
    if _model is not None:
        for key, value in data.items():
           setattr(_model, key, value)
        db.commit()
    else:
      raise ValueError("_model with ID {id} not found")