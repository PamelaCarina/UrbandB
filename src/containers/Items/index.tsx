import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';
import Alert from 'react-bootstrap/Alert';

let menuNav = [
  {
    name: "Menú", 
    rute: "/menu"
  }, 
  {
    name: "Áreas", 
    rute: "/areas"
  }, 
  // {
  //   name: "Categorías",
  //   rute: `/categorias/:id`,
  // },
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
  {
    text: ' alerta ', 
    formatter: (cell, row) => aviso_stock(row.cantidad, row.critico),
  }
];

let aviso_stock = (cantidad, critico) => {
  if (cantidad > (critico + 4)) {
    return ( 
      <Alert variant='success'>Stock Ok</Alert>
    )
  }
  else if (cantidad > (critico + 2) && cantidad <= (critico + 4)){
    return ( 
      <Alert variant='warning'>Stock casi bajo</Alert>
    )
  }
  else if (cantidad <= (critico + 2)){
    return ( 
      <Alert variant='danger'>¡Stock Bajo!</Alert>
    )
  }
};

const Items = ({match}) => {
  let params = match.params;
  const [items, setItems] = useState([]);
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
      <div>Productos</div>
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
