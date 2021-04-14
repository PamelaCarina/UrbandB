import os
import json
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
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
    # item = db.relationship("Items", back_populates="items")


class Items(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nombre = db.Column(db.String(80), nullable=False)
    unidad_medida = db.Column(db.String(80), nullable=False)
    id_categoria = db.Column(db.Integer, db.ForeignKey('categorias.id'))
    # categoria = db.relationship('Categorias', back_populates="items")
    tipo_user = db.Column(db.String(120), nullable=False)
    critico = db.Column(db.Integer, nullable=True)
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

@app.route

@app.route('/api/items/insert',endpoint="nuevo_item",methods= ['POST'])
def ingresar_items():
    json = request.get_json()
    json = json.get('data')
    print(json)
    nombre = json.get('nombre')
    unidad_medida = json.get('unidad_medida')
    # id_categoria = json.get('id_categoria')
    # tipo_user = json.get('tipo_user')
    critico = json.get('critico')
    multiplicador = json.get('multiplicador')

    for i in range(int(multiplicador)):
      new_item = Items()
      new_item.nombre = nombre
      new_item.unidad_medida = unidad_medida
      new_item.id_categoria = 1
      new_item.tipo_user = 1
      new_item.critico = critico
      db.session.add(new_item)
      db.session.commit()

    return jsonify({"id": new_item.id }), 201


@app.route('/api/items/lista',endpoint='lista_items', methods=['GET'])
def lista_items():
    items = Items.query.order_by(Items.id).all()

    return jsonify({
        "item": [{"id": x.id, "nombre": x.nombre, "unidad_medida": x.unidad_medida, "id_categoria": x.id_categoria , "tipo_user": x.tipo_user, "critico": x.critico, "fecha": x.timestamp} for x in items]
    })

@app.route('/api/areas/lista', endpoint='lista_areas', methods = ['GET'])
def lista_areas():
    areas = Areas.query.order_by(Areas.id).all()

    return jsonify({
      "area": [{"id": x.id, "nombre": x.nombre} for x in areas]
    })

@app.route('/api/categorias/lista', endpoint='lista_categorias', methods= ['GET'])
def lista_categorias():
    categorias = Categorias.query.order_by(Categorias.id).all()

    return jsonify({
      "categoria": [{"id": x.id, "nombre": x.nombre, "id_area": x.id_area} for x in categorias ]
      })

@app.route('/api/login',methods=['POST'])
def login():
    req = flask.request.get_json(force=True)
    rut = req.get('rut', None)
    password = req.get('password', None)
    user = guard.authenticate(rut, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200

@app.route('/api/delete/<id>',methods=['DELETE'])
def borrar_item(id):
    item = Items.query.get_or_404(id)
    db.session.delete(item)

    db.session.commit()
    return 'item borrado',204


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)