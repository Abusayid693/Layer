from typing import List, Optional, TypeVar, Generic
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T = TypeVar("T")

class SavedModelSchema(BaseModel):
    id: Optional[int] = None
    name: str = None
    user_id: int = None

    status: Optional[str] = None
    message: Optional[str] = None

    model_url: Optional[str] = None
    train_config: Optional[str] = None
    dataset_url: Optional[str] = None

    accuracy_graph_url: Optional[str] = None
    train_loss_graph_url: Optional[str] = None
    test_loss_graph_url: Optional[str] = None

    classification_type: Optional[str] = None
    
    class Config:
        orm_mode = True

class CSVTrainConfigSchemaS(BaseModel):
    name: str = None
    user_id: int = None
    optimizer: str = None
    learning_rate: float = None
    epochs: int = None
    layer_sizes: List[int] = None
    batch_size: int = None