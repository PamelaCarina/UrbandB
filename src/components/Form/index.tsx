import React, { useState, FC } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import MyTable from '../../components/Table';

interface props {
  handleAddItems ?: (item) => void;
  handleRetirarItems ?: (item) => void;
}

//necesito que los datos primero se agreguen a la tabla y después hacer un botón en la tabla de ingresar

const MyForm: FC<props> = ({ handleAddItems, handleRetirarItems}) => {
  const [codigo, setCodigo] = useState("");
  const [name, setName] = useState("");
  const [unidadMedida, setUnidadMedida] = useState("");
  const [critico, setCritico] = useState("");
  const [cantidad, setCantidad] = useState("");

  if(handleAddItems){
    const handleSubmit = (e) =>{
      e.preventDefault();
      // console.log(name);
      const data = {
        codigo: codigo,
        nombre: name,
        unidad_medida: unidadMedida,
        critico : critico,
        cantidad: cantidad
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
          <Form.Group as={Col} controlId="codigo">
              <Form.Label>Código</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el código del producto"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </Form.Group>

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

            <Form.Group as={Col} controlId="cantidad">
              <Form.Label>Cantidad de Productos</Form.Label>
              <Form.Control
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
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
    )
  }

  else if(handleRetirarItems){
    const retirarData = (e) => {
      e.preventDefault();
      const data ={
        codigo: codigo,
      }
      handleRetirarItems(data);
      axios.post(`http://127.0.0.1:5000/api/retirar/items/${data.codigo}`, {data} )
      .then(res => {
        console.log(res);
      })
    }
    return(
      <div>
        <h1>RETIRAR PRODUCTO</h1>
        <Form onSubmit = {retirarData}>
        <Form.Row>
          <Form.Group as={Col} controlId="codigo">
            <Form.Label>Código</Form.Label>
            <Form.Control
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
          </Form.Group>

        </Form.Row>
          <Button variant="primary" type="submit">
            Retirar
          </Button>
        </Form>
      </div>
    )
  }
  return(
    <div></div>
  );
};

export default MyForm;
