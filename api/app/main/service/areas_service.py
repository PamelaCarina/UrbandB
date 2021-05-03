import uuid
import datetime

from app.main import db
from app.main.model.areas import Areas

def lista_areas():
    areas = Areas.query.order_by(Areas.id).all()
    return areas, 201