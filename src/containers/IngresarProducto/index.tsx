import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MyFooter from '../../components/Footer';

let menuNav = [{name:"Menú", rute: "/menu"}, {name: "Cerrar sesión", rute: "/login"}];
let headTable = [{name: "Nombre", rute: "h1"}, {name: "Unidad de Medida", rute: "h2"}, {name: "Cantidad", rute: "h3"}, {name: "Crítico", rute: "h4"}];

const getNewitems = () => {
  return axios.get('http://127.0.0.1:5000/api/items/lista')
  .then(res => res.data.item) //sin conchetes retorna al tiro
}

const IngresarProducto = () => {
  const [newItems, setnewItems] = useState([]);
  const handleAddItems = (item) => {
    let aux = [...newItems];
    aux.push(item);
    setnewItems(aux);
  };

  return (
    <div>
      <div className="IngresarProducto">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <div className="IngresarProducto">
        <MyForm handleAddItems={handleAddItems}></MyForm>

        <MyTable headArr={headTable} bodyArrNewItems={newItems}></MyTable>
      </div>
      <div className="IngresarProducto">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default IngresarProducto;
