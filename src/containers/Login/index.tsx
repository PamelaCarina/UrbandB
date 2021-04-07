import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MyNavbar from '../../components/Navbar';

let menuNav = [{name: "", rute: "/"}];

const Login = () => {
  return(
    <div>
      <div className="Mylogin">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Rut</Form.Label>
          <Form.Control type="number" placeholder="Ingrese su rut" />
          <Form.Text className="text-muted">
            Ej: 123456789
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  )
}

export default Login;
