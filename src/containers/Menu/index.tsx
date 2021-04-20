import React from 'react';
import { Link } from 'react-router-dom';
//import '../App.global.css';
import MyNavbar from '../../components/Navbar';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Nav from 'react-bootstrap/Nav';

let menuNav = [{name: "Cerrar Sesión", rute: "/login"}];

const Menu = () => {
  return (
    <div>
      <div className="Menu">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <h1> Bienvenido al control de inventarios del "Edificio 7"</h1>
      <h2>¿Que desea hacer?</h2>
      <div className="Menu">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/areas"> Revisar Inventario </Nav.Link>
          <Nav.Link as={Link} to="/ingresar-item">Ingresar Producto</Nav.Link>
          <Nav.Link as= {Link} to="/retirar-item">Retirar Productos</Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Menu;
