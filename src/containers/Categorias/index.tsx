import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';
//import '../App.global.css';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';

  let menuNav = [{name: "Menú", rute: "/menu"}, {name: "Áreas", rute: "/areas"}, {name:"Cerrar Sesión", rute:"/login"}];
  let headTable = [{dataField: 'nombre', text: 'Categorías'}];

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/categorias/lista')
    .then(res => {
      console.log(res);
      setCategorias(res.data.categoria)
    })
  },[])
  return (
    <div>
      <div className="Categorias">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div>
      <div className="Categorias">
        <MyTable headArr={headTable} bodyArrCategorias={categorias}></MyTable>
      </div>
      <div className="Categorias">
        <MyFooter></MyFooter>
      </div>
    </div>
  );
};

export default Categorias;
