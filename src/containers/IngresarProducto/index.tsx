import React from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MyFooter from '../../components/Footer';

let menuNav = [{name:"Menú", rute: "/menu"}, {name: "Cerrar sesión", rute: "/login"}];
let headTable = [{name: "ID", rute: "h1"}, {name: "Nombre", rute: "h2"}, {name: "Cantidad", rute: "h3"}, {name: "Unidad de Medida", rute: "h4"}, {name: "Fecha", rute: "h5"}];

const IngresarProducto = () => {
  return (
    <div>
      <div className="IngresarProducto">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <div className="IngresarProducto">
        <MyForm></MyForm>

        <MyTable headArr={headTable}></MyTable>
      </div>
      <div className="IngresarProducto">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default IngresarProducto;
