import React, { useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';
import yeison from '../../items.json';

let menuNav = [{name: "Menú", rute: "/menu"}, {name: "Áreas", rute: "/areas"}, {name:"Cerrar Sesión", rute:"/login"}];
let headTable = [{name: "ID", rute: "h1"}, {name: "Nombre", rute: "h2"}, {name: "Cantidad", rute: "h3"}, {name: "Unidad de Medida", rute: "h4"}, {name: "Fecha", rute: "h5"}, {name: " ", rute: "h6"}];
let bodyTable = yeison;
//console.log(bodyTable);

const Items = () => {
  return (
    <div>
      <div className="Items">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Items">
        <MyTable headArr={headTable} bodyArrItems={bodyTable}></MyTable>
      </div>
      <div className="Items">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default Items;
