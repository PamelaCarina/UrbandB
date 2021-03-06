const {app, BrowserWindow, Menu} = require('electron');
const electron = require('electron');
const path = require('path');


const btnIngresar = document.getElementById('btn_ingresar');

btnIngresar.addEventListener('click', function (event) {
    let ventanaCategoria = new BrowserWindow({
        width: 400,
        height:300
    });

    ventanaCategoria.loadFile('./templates/categorias.html');
    ventanaCategoria.setMenu(null);
    ventanaCategoria.once('ready-to-show', ()=>{
        ventanaCategoria.show();
    });
});