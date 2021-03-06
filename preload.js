//aquí podría especificar el iniciar sesión

function establecerVersion(idSelector, version){
    let elemento = document.getElementById(idSelector);
    if(elemento){
        elemento.innerText = version;
    }
}

window.addEventListener('DOMContentLoaded', () =>{ //vamos a rellenar las versiones de la ventana principal
    const componentes = ['Node', 'Chrome', 'Electron']
    for(const componente of componentes){
        establecerVersion(`version${componente}`, process.versions[componente.toLocaleLowerCase()]);

    }
})