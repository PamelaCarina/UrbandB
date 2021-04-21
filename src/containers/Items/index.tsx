import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';

let menuNav = [
  {
    name: "Menú", 
    rute: "/menu"
  }, 
  {
    name: "Áreas", 
    rute: "/areas"
  }, 
  {
    name:"Cerrar Sesión", 
    rute:"/login"
  }
];
let headTable = [
  {
    dataField: 'codigo', 
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
  },
  // {
  //   text: ' alerta ', 
  //   formatter: (cell, row) => aviso_stock(row.id),
  // }
];

// let aviso_stock = () => {
//   if(estok > algo){
//     return alerta :D
//   }

//   else if(estok = algo){

//   }
// }
  
const Items = ({match}) => {
  let params = match.params;
  const [items, setItems] = useState([]);
  console.log(params.id);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/api/lista/items/${params.id}`)
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
      {/* <div className="Items">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default Items;
