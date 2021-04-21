import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MySubmitButton from '../../components/SubmitButton';
import MyFooter from '../../components/Footer';

let menuNav = [{name:"Menú", rute: "/menu"}, {name: "Cerrar sesión", rute: "/login"}];
let headTable = [
  {
    dataField: 'codigo', 
    text: 'Código'
  }, 
  // {
  //   dataField: 'Categoría', 
  //   text: 'categoria'
  // }, 
  // {
  //   dataField: 'area', 
  //   text: 'Área'
  // }, 
  {
    dataField: 'nombre', 
    text: 'Nombre'
  }, 
  {
    dataField: 'unidad_medida', 
    text: 'Unidad de Medida'
  }, 
  {
    dataField: 'cantidad', 
    text: 'Cantidad'
  }, 
  {
    dataField: 'critico', 
    text: 'Stock Crítico'
  },
  {
    dataField: 'fecha', 
    text: 'Fecha'
  }, 
];

const IngresarProducto = () => {
  const [newItems, setnewItems] = useState([]);
  const handleAddItemsTable = (item) => {
    console.log(newItems);
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
        <MyForm handleAddItemsTable={handleAddItemsTable}></MyForm>
        <MyTable headArr={headTable} bodyArrNewItems={newItems}></MyTable>
        <MySubmitButton></MySubmitButton>
      </div>
      {/* <div className="IngresarProducto">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default IngresarProducto;