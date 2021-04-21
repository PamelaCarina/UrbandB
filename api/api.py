import os
import json
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.sql import exists
from sqlalchemy.sql.expression import desc, asc
app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)


class Areas(db.Model):
    __tablename__ = 'areas'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    categorias = db.relationship('Categorias', backref='area')


class Categorias(db.Model):
    __tablename__ = 'categorias'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=True, nullable=False)
    id_area = db.Column(db.Integer, db.ForeignKey('areas.id'))
    items = db.relationship('Items', backref='categoria')
    # item = db.relationship("Items", back_populates="items")


class Items(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    codigo = db.Column(db.String(80),unique=True,nullable=True)
    nombre = db.Column(db.String(80), nullable=False)
    unidad_medida = db.Column(db.String(80), nullable=False)
    id_categoria = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    # categoria = db.relationship('Categorias', back_populates="items")
    tipo_user = db.Column(db.String(120), nullable=False)
    critico = db.Column(db.Integer, nullable=True)
    cantidad = db.Column(db.Integer, nullable=True)
    timestamp = db.Column(
        db.DateTime(), default=datetime.utcnow, onupdate=datetime.utcnow)


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    rut = db.Column(db.Integer, unique=True, nullable=False)
    password = db.Column(db.String(80), unique=True, nullable=False)
    tipo = db.Column(db.Boolean(), unique=True, nullable=False)

@app.route('/api/')
def home():
    return {'work': 200}


@app.route('/api/items/insert', endpoint="nuevo_item", methods=['POST'])
def ingresar_items():
    json = request.get_json()
    json = json.get('data')
    print(json)
    codigo = json.get('codigo')
    nombre = json.get('nombre')
    unidad_medida = json.get('unidad_medida')
    # id_categoria = json.get('id_categoria')
    # tipo_user = json.get('tipo_user')
    critico = json.get('critico')
    cantidad = json.get('cantidad')
    new_item = Items()
    exists = db.session.query(db.exists().where(Items.codigo == codigo)).scalar()
    print(exists)
    if exists:
      print("DEBUG")
      # item = db.session.query().filter_by(codigo=codigo).scalar()
      # print(item)
      cambio = db.session().query(Items).filter_by(codigo=codigo,nombre=nombre,unidad_medida=unidad_medida).update(
          {Items.cantidad: Items.cantidad + cantidad})
      print(cambio)
      db.session.commit()
      return jsonify({"id": cambio})

    else:
      new_item.codigo = codigo
      new_item.nombre = nombre
      new_item.unidad_medida = unidad_medida
      new_item.id_categoria = 1
      new_item.tipo_user = 1
      new_item.critico = critico
      new_item.cantidad = cantidad

      db.session.add(new_item)
      db.session.commit()
      # return jsonify({"id": new_item.id})
      return jsonify({"id": new_item.id}), 201


@app.route('/api/lista/categorias/<id>',endpoint='list_linkeda',methods=['GET'])
def lista_link_categorias(id):
    categorias = db.session.query(Categorias).filter_by(id_area=id).join(Areas).order_by(asc(Areas.nombre))

    return jsonify({
        "categoria": [{"id": x.id, "nombre": x.nombre} for x in categorias]
    })

@app.route('/api/lista/items/<id>',endpoint='list_linkeda2',methods=['GET'])
def lista_link_items(id):
    items = db.session.query(Items).filter_by(id_categoria=id).join(Categorias).order_by(asc(Categorias.nombre))

    return jsonify({
        "item": [{"id": x.id, "codigo": x.codigo, "nombre": x.nombre, "unidad_medida": x.unidad_medida, "id_categoria": x.id_categoria , "tipo_user": x.tipo_user, "critico": x.critico, "cantidad": x.cantidad, "fecha": x.timestamp} for x in items]
    })

@app.route('/api/items/lista',endpoint='lista_items', methods=['GET'])
def lista_items():
    items = Items.query.order_by(Items.id).all()

    return jsonify({
        "item": [{"id": x.id, "codigo": x.codigo, "nombre": x.nombre, "unidad_medida": x.unidad_medida, "id_categoria": x.id_categoria , "tipo_user": x.tipo_user, "critico": x.critico, "cantidad": x.cantidad, "fecha": x.timestamp} for x in items]
    })

@app.route('/api/areas/lista', endpoint='lista_areas', methods = ['GET'])
def lista_areas():
    areas = Areas.query.order_by(Areas.id).all()

    return jsonify({
      "area": [{"id": x.id, "nombre": x.nombre} for x in areas]
    })

# @app.route('/api/categorias/lista/', endpoint='lista_categorias', methods= ['GET'])
# def lista_categorias():
#     categorias = Categorias.query.order_by(Categorias.id).all()

#     return jsonify({
#       "categoria": [{"id": x.id, "nombre": x.nombre, "id_area": x.id_area} for x in categorias ]
#       })

@app.route('/api/login',methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    rut = req.get('rut', None)
    password = req.get('password', None)
    user = guard.authenticate(rut, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

@app.route('/api/tabla/returar',methods=['GET'])
def tabla_retirar():
    tabla = db.session.query(Items,Categorias.nombre,Areas.nombre).join(Categorias).join(Areas).filter_by(Items.id)

    return jsonify({
        "item": [{"id": x.id, "codigo": x.codigo, "nombre": x.nombre, "unidad_medida": x.unidad_medida, "area":x.areas, "categoria": x.categoria , "tipo_user": x.tipo_user, "critico": x.critico, "cantidad": x.cantidad, "fecha": x.timestamp} for x in tabla]
    })

@app.route('/api/retirar/items',methods=['POST'])
def retirar_item():
    json = request.get_json()
    codigo = json.get('codigo')
    cantidad = json.get('cantidad')
    exists = db.session.query(db.exists().where(Items.codigo == codigo)).scalar()
    if exists:
      print("DEBUG")
      # item = db.session.query().filter_by(codigo=codigo).scalar()
      # print(item)
      cambio = db.session().query(Items).filter_by(codigo=codigo,nombre=nombre,unidad_medida=unidad_medida).update(
          {Items.cantidad: Items.cantidad - cantidad})
      print(cambio)
      db.session.commit()
      return jsonify({"id": cambio})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
