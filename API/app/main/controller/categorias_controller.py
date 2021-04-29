from flask import request
from flask_restplus import Resource

from ..service.categorias_service import *
from ..util.dto import CategoriasDto

api = CategoriasDto.api
_categoria = CategoriasDto.categoria

#@api.route('/api/categorias')
#class Categorias(Resource):
#    @api.doc('Lista de todos los items')
#    @api.marshal_list_with(_categoria, envelope='data')
#    def get(self):
#        return lista_items()

    #@api.response(201, 'Item insertado')
   # @api.doc('Crea un nuevo item')
  #  @api.expect(_categoria, validate=True)
 #   def post(self):
#        data = request.json
#        return ingresar_items(data=data)
