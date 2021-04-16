import React, {useEffect, useState} from 'react';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import axios from 'axios';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyForm from '../../components/Form';
import MyFooter from '../../components/Footer';

let menuNav = [{name:"Menú", rute: "/menu"}, {name: "Cerrar sesión", rute: "/login"}];
let headTable = [
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
  }];

// const getNewitems = () => {
//   return axios.get('http://127.0.0.1:5000/api/items/lista')
//   .then(res => res.data.item) //sin conchetes retorna al tiro
// }

const IngresarProducto = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
      axios.get('http://127.0.0.1:5000/api/items/lista')
      .then(res => {
        console.log(res);
        setItems(res.data.item)
      })
    },[])

    const handleDeleteItems = (item) => {
        let aux = [...Items];
        aux.pop(item);
        setItems(aux);
      };
  return (
    <div>
      <div className="IngresarProducto">
        <MyNavbar menuArr={menuNav}> </MyNavbar>
      </div>
      <div className="IngresarProducto">
        <MyForm handleDeleteItems={handleDeleteItems}></MyForm>

        <MyTable headArr={headTable} bodyArrItems={items}></MyTable>
      </div>
      <div className="IngresarProducto">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default IngresarProducto;