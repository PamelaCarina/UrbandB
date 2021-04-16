import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';

let menuNav = [{name: "Menú", rute: "/menu"}, {name: "Áreas", rute: "/areas"}, {name:"Cerrar Sesión", rute:"/login"}];
let headTable = [
  {
    dataField: 'id', 
    text: 'Código'
  }, 
  {
    dataField: 'nombre', 
    text: 'Nombre'
  }, 
  {
    dataField: 'cantidad', 
    text: 'Cantidad'
  }, 
  {
    dataField: 'unidad_medida', 
    text: 'Unidad de Medida'
  }, 
  {
    dataField: 'fecha', 
    text: 'Fecha'
  }];
  
const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/items/lista')
    .then(res => {
      console.log(res);
      setItems(res.data.item)
    })
  },[])
  return (
    <div>
      <div className="Items">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Items">
        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </div>
      <div className="Items">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default Items;
