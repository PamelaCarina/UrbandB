import React, {useState, FC} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

interface props{
  alertas:{
    critico: number;
    cantidad: number;
  }[];
  items:{
    nombre:string;
    area:string;
    categoria:string;
  }[];
};
let cant;
let crit;
let mapeo;
let mapeo2;
let areas;
let categorias;
let item;

let Alerts: FC<props> = ({alertas, items}) => {
    const [bajo, setBajo] = useState(true);
    const [medio, setMedio] = useState(true);
    const [alto, setAlto] = useState(true);
    mapeo = alertas.map((elem1)=>{
      cant = elem1.cantidad;
      crit = elem1.critico;  
      let rojo = bajo && (cant <= (crit + 2));
      let amarillo = medio && (cant > (crit + 2) && cant <= (crit + 4)); 
      if (rojo) {
        mapeo2 = items.map((elem2)=>{
          item = elem2.nombre;
          areas = elem2.area;
          categorias = elem2.categoria;
          return (
            <Alert variant="danger" onClose={() => setBajo(false)} dismissible>
              <Alert.Heading>Stock bajo!</Alert.Heading>
              <p>
                Tu stock se encuentra al límite.
                El producto {item} de la categoría {categorias} del área {areas} está bajo. 
              </p>
            </Alert>
          );
        })
      }
      else if(amarillo){
        return(
          <Alert variant="warning" onClose={() => setMedio(false)} dismissible>
            <Alert.Heading>Stock casi bajo!</Alert.Heading>
            <p>
              Tu stock está a punto de llegar a niveles críticos!
            </p>
          </Alert>
        )
      }
    })

    // let verde = alto && (cant > (crit + 4));
    // if(verde){
    //   return(
    //     <Alert variant="success" onClose={() => setAlto(false)} dismissible>
    //       <Alert.Heading>Stock Ok!</Alert.Heading>
    //       <p>
    //         Todo bien, aun tienes stock en tu inventario.
    //       </p>
    //       <hr />
    //         <p className="mb-0">
    //           Recuerda siempre llenarlo.
    //         </p>
    //     </Alert>
    //   )
    // }
    return(<div></div>)
  }
  
export default Alerts;