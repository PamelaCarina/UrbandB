import React, {useState, useEffect} from 'react';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

let Alerts = ({match}) => {
    let params = match.params;
    const [bajo, setBajo] = useState(true);
    const [medio, setMedio] = useState(true);
    const [alto, setAlto] = useState(true);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:5000/api/lista/items/${params.id}`)
        .then(res => {
          console.log(res);
          setItems(res.data.item)
        })
    },[])

    if (bajo) {
      return (
        <Alert variant="danger" onClose={() => setBajo(false)} dismissible>
          <Alert.Heading>Stock bajo!</Alert.Heading>
          <p>
            Tu stock se encuentra al límite, recuerda ingresar productos.
          </p>
        </Alert>
      );
    }
    else if(medio){
      return(
        <Alert variant="success" onClose={() => setMedio(false)} dismissible>
          <Alert.Heading>Stock casi bajo!</Alert.Heading>
          <p>
            Tu stock está a punto de llegar a niveles críticos!
          </p>
        </Alert>
      )
    }
    else if(alto){
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