from sqlalchemy.orm import Session
from db_models.saved_models.model import SavedModel
from db_models.saved_models.schema import SavedModelSchema
from fastapi.responses import JSONResponse

def create_model_db_instance(db: Session, data: SavedModelSchema):
    _model = SavedModel(name=data.name, user_id=data.user_id)
    db.add(_model)
    db.commit()
    db.refresh(_model)
    return _model.id
