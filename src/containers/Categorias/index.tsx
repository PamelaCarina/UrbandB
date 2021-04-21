import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
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
    dataField: 'nombre',
    text: 'Categorías'
  },
  {
    text: 'Revisar',
    formatter: (cell, row) => revisar(row.id),
  },
];

let revisar = (id) => {
  return(
    <Button as={Link} to={`/items/${id}`}> Revisar </Button>
  )
}

const Categorias = ({match}) => {
  let params = match.params;
  const [categorias, setCategorias] = useState([]);
  console.log(params.id);

  useEffect(()=>{
    axios.get(`http://127.0.0.1:5000/api/lista/categorias/${params.id}`)
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
      {/* <div className="Categorias">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default Categorias;
