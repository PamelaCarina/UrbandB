import React, {useState, FC} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

interface props{
  alertas:{
    critico: number;
    cantidad: number;
  }[];
};
let mapeo;
let cant;
let crit;
let Alerts: FC<props> = ({alertas}) => {
    const [bajo, setBajo] = useState(true);
    const [medio, setMedio] = useState(true);
    const [alto, setAlto] = useState(true);
    mapeo = alertas.map((elem)=>{
      cant = elem.cantidad;
      crit = elem.critico;   
    })
    if (bajo && (cant <= (crit + 2))) {
      return (
        <Alert variant="danger" onClose={() => setBajo(false)} dismissible>
          <Alert.Heading>Stock bajo!</Alert.Heading>
          <p>
            Tu stock se encuentra al límite, recuerda ingresar productos.
          </p>
        </Alert>
      );
    }
    else if(medio && (cant > (crit + 2) && cant <= (crit + 4))){
      return(
        <Alert variant="warning" onClose={() => setMedio(false)} dismissible>
          <Alert.Heading>Stock casi bajo!</Alert.Heading>
          <p>
            Tu stock está a punto de llegar a niveles críticos!
          </p>
        </Alert>
      )
    }
    else if(alto && (cant > (crit + 4))){
      return(
        <Alert variant="success" onClose={() => setAlto(false)} dismissible>
          <Alert.Heading>Stock Ok!</Alert.Heading>
          <p>
            Todo bien, aun tienes stock en tu inventario.
          </p>
          <hr />
            <p className="mb-0">
              Recuerda siempre llenarlo, para que no te falte nada.
            </p>
        </Alert>
      )
    }
    return(<div></div>)
  }
  
export default Alerts;