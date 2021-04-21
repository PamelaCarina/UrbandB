import React from 'react';
import { Link } from 'react-router-dom';
//import '../App.global.css';
import MyNavbar from '../../components/Navbar';
import Alerts from '../../components/Alerts';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import Nav from 'react-bootstrap/Nav';

let menuNav = [{name: "Cerrar Sesión", rute: "/login"}];

const Menu = () => {
  return (
    <div>
      <Alerts></Alerts>
      <div className="Menu">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <h2> Bienvenido al control de inventarios del "Edificio 7"</h2>
      <h2>¿Qué desea hacer?</h2>
      <div className="Menu">

        <ButtonGroup vertical>
          <Button variant="outline-dark" as={Link} to="/areas">Revisar Inventario</Button>
          <Button variant="outline-dark" as={Link} to="/ingresar-item">Ingresar Producto</Button>
          <Button variant="outline-dark" as={Link} to="/retirar-item">Retirar Productos</Button>
        </ButtonGroup>
        {/* <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/areas"> Revisar Inventario </Nav.Link>
          <Nav.Link as={Link} to="/ingresar-item">Ingresar Producto</Nav.Link>
          <Nav.Link as= {Link} to="/retirar-item">Retirar Productos</Nav.Link>
        </Nav> */}
      </div>
    </div>
  );
};

export default Menu;
