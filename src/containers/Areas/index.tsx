import React from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';
import yeisonareas from '../../areas.json';

let menuNav = [{name: "Menú", rute: "/"}, {name: "Cerrar Sesión", rute: "/login"}];
let headTable = [{name: "Áreas", rute: "h1"}, {name:"", rute: "h2"}];
let bodyTable2 = yeisonareas;

const Areas = () => {
  return (
    <div>
      <div className="Areas">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Areas">
        <MyTable headArr={headTable} bodyArrAreas={bodyTable2}></MyTable>
      </div>
      <div className="Areas">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default Areas;
