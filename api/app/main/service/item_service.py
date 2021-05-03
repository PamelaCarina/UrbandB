import uuid
import datetime
import pytz
from dateutil import tz

from app.main import db
from app.main.model.item import Items
from app.main.model.categorias import Categorias
from app.main.model.areas import Areas

utc_timezone = pytz.timezone("UTC")

def lista_items():
    items = Items.query.order_by(Items.id).all()

    return items, 201

def ingresar_items(data):
    codigo = data['codigo']
    nombre = data['name']
    unidad_medida = data['unidadMedida']
    id_categoria = data['id_categoria']
    critico = data['critico']
    cantidad = data['cantidad']
    new_item = Items()
    exists = db.session.query(db.exists().where(Items.codigo == codigo)).scalar()
    print(data)
    if exists:
        cambio = db.session().query(Items) \
            .filter_by(codigo=codigo,nombre=nombre,unidad_medida=unidad_medida) \
            .update({Items.cantidad: Items.cantidad + cantidad})
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.',
            'id': cambio
        }
        print(response_object)
        return response_object, 201

    else:
        new_item.codigo = codigo
        new_item.nombre = nombre
        new_item.unidad_medida = unidad_medida
        new_item.id_categoria = id_categoria
        new_item.critico = critico
        new_item.cantidad = cantidad

        db.session.add(new_item)
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.',
            'id': new_item.id
        }
        return response_object, 201


def save_changes(data):
    db.session.add(data)
    db.session.commit()

def retirar_item(data):
    codigo = data['codigo']
    nombre = data['name']
    unidad_medida = data['unidadMedida']
    cantidad = data['cantidad']
    exists = db.session.query(db.exists().where(Items.codigo == codigo)).scalar()
    if exists:
        cambio = db.session().query(Items) \
            .filter_by(codigo=codigo,nombre=nombre,unidad_medida=unidad_medida) \
            .update({Items.cantidad: Items.cantidad - cantidad})
        db.session.commit()
        response_object = {
            'status': 'success',
            'message': 'Successfully registered.',
            'id': cambio
        }
        return response_object, 201

    else:
        pass

def lista_link_items(id):
    items = db.session().query(Items).filter_by(id_categoria=id).join(Categorias).order_by(Categorias.nombre).all()
    return items

def tabla_retirar(): #ESTA FUNCIONA BIEN
    tabla = db.session.query(Items,Categorias,Areas).select_from(Items).join(Categorias).join(Areas).all()
    ans = []
    for elem in tabla:
        myItem = elem[0]
        myCategoria = elem[1]
        myArea = elem[2]
        STGO = tz.gettz('America/Santiago')
        with_timezone = utc_timezone .localize(myItem.timestamp)
        aux = {
            "codigo": myItem.codigo,
            "nombre": myItem.nombre,
            "area": myArea.nombre,
            "categoria": myCategoria.nombre,
            "id_categoria": myCategoria.id,
            "cantidad": myItem.cantidad,
            "unidad_medida": myItem.unidad_medida,
            "critico": myItem.critico,
            "timestamp": with_timezone.astimezone(tz=STGO).strftime("%d-%m-%Y %H:%M")
        }
        ans.append(aux)
    print(ans)
    return ans, 201

def tabla_todo(id):
    tabla = db.session.query(Items,Categorias,Areas).select_from(Items).filter_by(id_categoria=id).join(Categorias).filter_by(id_area=id).join(Areas).all()
    ans = []
    for elem in tabla:
        myItem = elem[0]
        myCategoria = elem[1]
        myArea = elem[2]
        STGO = tz.gettz('America/Santiago')
        with_timezone = utc_timezone .localize(myItem.timestamp)
        aux = {
            "id": myItem.id,
            "codigo": myItem.codigo,
            "nombre": myItem.nombre,
            "area": myArea.nombre,
            "id_area": myArea.id,
            "categoria": myCategoria.nombre,
            "id_categoria": myCategoria.id,
            "cantidad": myItem.cantidad,
            "unidad_medida": myItem.unidad_medida,
            "critico": myItem.critico,
            "timestamp": with_timezone.astimezone(tz=STGO).strftime("%d-%m-%Y %H:%M")
        }
        ans.append(aux)
    print(ans)
    return ans, 201