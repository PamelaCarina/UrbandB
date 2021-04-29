import uuid
import datetime

from app.main import db
from app.main.model.item import Items
from app.main.model.categorias import Categorias
from app.main.model.areas import Areas

def lista_items():
    items = Items.query.order_by(Items.id).all()

    return items, 201

def ingresar_items(data):
    codigo = data['codigo']
    nombre = data['nombre']
    unidad_medida = data['unidad_medida']
    id_categoria = data['id_categoria']
    critico = data['critico']
    cantidad = data['cantidad']
    new_item = Items()
    exists = db.session.query(db.exists().where(Items.codigo == codigo)).scalar()
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


def retirar_item(data):
    codigo = data['codigo']
    nombre = data['nombre']
    unidad_medida = data['unidad_medida']
    id_categoria = data['id_categoria']
    critico = data['critico']
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

def tabla_retirar():
    tabla = db.session.query(Items,Categorias,Areas).select_from(Items).join(Categorias).join(Areas).all()
    return tabla, 201


def tabla_todo(id):
    tabla = db.session.query(Items,Categorias,Areas).select_from(Items).filter_by(id_categoria=id).join(Categorias).join(Areas).all()
    return tabla, 201
   
    





