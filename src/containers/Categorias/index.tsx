import React from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';
import yeisoncategorias from '../../categorias.json';

  let menuNav = [{name: "Menú", rute: "/menu"}, {name: "Áreas", rute: "/areas"}, {name:"Cerrar Sesión", rute:"/login"}];
  let headTable = [{name: "Categorías", rute: "h1"}];
  let bodyTable3 = yeisoncategorias;

const Categorias = () => {
  return (
    <div>
      <div className="Categorias">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Categorias">
        <MyTable headArr={headTable} bodyArrCategorias={bodyTable3}></MyTable>
      </div>
      <div className="Categorias">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default Categorias;
