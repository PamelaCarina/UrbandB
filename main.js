//proceso principal, aquí re crean los procesos de renderisado

const {app, BrowserWindow, Menu, Notification} = require('electron');
const path = require('path');
const url = require('url');
const {getConnection} = require('./js/database');

require('electron-reload')(__dirname);

async function crearItem(item){
    const conn = await getConnection();
    const result = await conn.query('INSERT INTO items SET ?', item);

    item.id = result.insertId;
    return item;
}

/* tabla y botón de agregar todos los productos 

async function obtenerItem(){

    new Notification({
        title: '',
        body: 'Sus productos han sido cargados satisfactoriamente',
    }).show();
}

*/

function crearVentanaPrincipal(){
    let ventanaPrincipal = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences: {
            nodeIntegration: true, 
            enableRemoteModule: true
         }
    });

    ventanaPrincipal.loadFile('./templates/areas.html');

    ventanaPrincipal.on('closed', () =>{
        ventanaPrincipal = null;
    });
}

/* function abrirVentanaCategoria(){
    let ventanaCategoria = new BrowserWindow({
        parent: ventanaPrincipal,
        modal: true,
        show: false,
        width: 400,
        height:300
    });

    ventanaCategoria.loadFile('./templates/categorias.html');
    ventanaCategoria.setMenu(null);
    ventanaCategoria.once('ready-to-show', ()=>{
        ventanaCategoria.show();
    });
}

function abrirVentanaIngresarProducto(){

}; */

app.whenReady().then(crearVentanaPrincipal);

//COMPATIBILIDAD CON MAC
app.on('window-all-closed', function(){
    if(process.platform === 'darwin'){
        app.quit();
    }
});
app.on('activare', function(){
    if(BrowserWindow.getAllWindows().length === 0){
        crearVentanaPrincipal();
    }
});

module.exports= {
    crearItem
}