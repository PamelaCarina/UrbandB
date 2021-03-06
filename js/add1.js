// Ingresar producto, aquí hago consultas CONEXIÓN CON BASE DE DATOS

const form_nuevo_item = document.getElementById('form_nuevo_item');

const {remote} = require('electron');
const main = remote.require('./main.js');

main.crearItem();

const nombre = document.getElementById('nombre');
const unidad_medida = document.getElementById('unidad_medida');
const id_categoria = document.getElementById('id_categoria');
const tipo_user = document.getElementById('tipo_user');


form_nuevo_item.addEventListener('submit', async() => {

    const nuevo_Item = {

        nombre: nombre.value,
        unidad_medida: unidad_medida.value,
        id_categoria: id_categoria.value,
        tipo_user: tipo_user.value
    
    }

    const result = await main.crearItem(nuevo_Item);
    console.log(result);

});