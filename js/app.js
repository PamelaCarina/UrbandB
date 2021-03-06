

require('./database');

class GestorItems {
    constructor(){
        this.form_nuevo_item = document.getElementById('form_nuevo_item');
        this.nuevos_items = document.getElementById('nuevos_items');
        this.id = document.getElementById('id');
        this.nombre = document.getElementById('nombre');
        this.id_categoria = document.getElementById('id_categoria');
        this.rut_usuario = document.getElementById('rut_usuario');
        this.btn_ingresar_producto = document.getElementById('btn_ingresar_producto');

        this.cargarNuevoItem();
        this.agregarEventListener();
    }

    agregarEventListener(){
        this.form_nuevo_item.addEventListener('submit', this.crearIngresarProducto.bind(this));
    }

    crearIngresarProducto(evento){
        console.log(evento);
        console.log('wena pasaste por aca');
        evento.preventDefault();
        
        baseDatos.agregarItem(this.id.value, this.nombre.value, this.id_categoria.value, this.rut_usuario.value);

        this.id.value = '';
        this.nombre.value = '';
        this.id_categoria.value= ''; 
        this.rut_usuario.value = '';

        this.cargarNuevoItem();
    }

    generarHtmlRegistroItem(items){
        return `<tr>
         <td>${items.id}</td>
         <td>${items.nombre}</td>
         <td>${items.id_categoria}</td>
         <td>${items.rut_usuario}</td>
         <td><input type="button" class="btn btn-danger btn-sm" onclick="gestorItems.eliminarRegistroItems('${items._id}');" value="Eliminar"></td>
        </tr>`;
    }

    cargarNuevoItem(){
        baseDatos.obtenerItem((items) => {
            let html = items.map(this.generarHtmlRegistroItem).join('');

            this.nuevos_items.innerHTML = html;
        });
    }

    eliminarRegistroItems(id) {
        baseDatos.eliminarItem(id);

        this.cargarNuevoItem();
    }

}

let gestorItems = new GestorItems();