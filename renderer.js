// aquí se escribe el código para configurar la ventana de la aplicación

// PUNTO . -> CLASE
// GATO # -> ID

class Areas{
    constructor(){
        this.mensajeError = document.querySelector('.mensaje-error');
        this.formularioCreacionItems = document.querySelector('.creacion-items');
        this.nombreItem = document.querySelector('.nombre-item');
        this.crearBoton = document.querySelector('.creacion-nuevo-item');

        this.parser = new DOMParser();
        this.agregarEventListeners(); 
    }

    //creo que esto no nos sirve uwu
    agregarEventListeners(){
        this.nombreItem.addEventListener('keyup', () =>{
            this.crearBoton.disabled = this.nombreItem.validity.valid; //si está bien el input, pasa, si está mal, no pasa
        });

        this.crearBoton.addEventListener('submit', this.crearItem.bind(this))
    }

    //obtiene todo el contenido de una página a través de una consulta
//    crearItem(evento){
//        evento.preventDefault();
//        const item = this.nombreItem.nodeValue;

//        fetch(item)
//        .then(respuesta => respuesta.text())
//        .then(this.extraerContenido)

//    }

//    extraerContenido(contenido){
//        return this.parser.parseFromString(contenido, 'text/html');
//    }

//let html = una cadena de cosas
// this.mensaje.innerHTML = html; anida la lista de html

//reporta un error de input de item
//.catch(error => this.reportarError(error, item));
//reportarError(error, item){
//  this.mensajeError.innerHTML = 'un error chuchetumare' $(error);
//  setTimeout()=>{
//    this.mensajeError.innerText = null;
//  }, 5000);
}

class Categorias{
    constructor(){
    }
}