import React from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MyFooter from '../../components/Footer';

let menuNav = [{name: "Menú", rute: "/menu"}, {name: "Cerrar Sesión", rute: "/login"}];
let headTable = [{name: "ID", rute: "h1"}, {name: "Nombre", rute: "h2"}, {name: "Cantidad", rute: "h3"}, {name: "Unidad de Medida", rute: "h4"}, {name: "Fecha", rute: "h5"}];

const NuevoProducto = () => {
  return (
    <div>
      <div className="NuevoProducto">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
        <div className="NuevoProducto">
        <MyForm></MyForm>

        <MyTable headArr={headTable}></MyTable>
      </div>
      <div className="NuevoProducto">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default NuevoProducto;
