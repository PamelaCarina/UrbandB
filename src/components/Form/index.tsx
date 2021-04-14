import React, { useState, FC } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

interface props {
  handleAddItems: (item) => void;
}

// ingProd.tsx state = [item1, item2]
// setNewitems([item1, item2, item3])
// state = [item1, item2, item3]

const MyForm: FC<props> = ({ handleAddItems }) => {
  const [name, setName] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [critico, setCritico] = useState("");
  const [multiplicador, setMultiplicador] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(name);
    const data = {
      nombre: name,
      unidad_medida: unidadMedida,
      critico : critico,
      multiplicador: multiplicador
    }
    handleAddItems(data);

    axios.post('http://127.0.0.1:5000/api/items/insert', {data} )
    .then(res => {
        console.log(res);
      })
  }

  return(
    <div>
      <Form onSubmit = {handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre del producto"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="unidad_medida">
            <Form.Label>Unidad de Medida</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la unidad de medida"
              value={unidadMedida}
              onChange={(e) => setUnidadMedida(e.target.value)}
             />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="critico">
            <Form.Label>Stock crítico</Form.Label>
            <Form.Control
              value={critico}
              onChange={(e) => setCritico(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="multiplicador">
            <Form.Label>Cantidad de Productos</Form.Label>
            <Form.Control
              value={multiplicador}
              onChange={(e) => setMultiplicador(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="tipo_user">
            <Form.Label>Tipo de usuario</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Administrador</option>
              <option>Lector</option>
            </Form.Control>
          </Form.Group> */}

        </Form.Row>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>

  );
};

export default MyForm;
