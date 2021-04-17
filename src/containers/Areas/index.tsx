import React, {useState, useEffect} from 'react';
//import '../App.global.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import MyTable from '../../components/Table';
import MyNavbar from '../../components/Navbar';
import MyFooter from '../../components/Footer';

// let getLoading = async () => {
//   return axios
//     .get(
//       `/api/seguimientos/loading/${this.props.projectId}/${this.state.projects[0].tracking_time}`,
//       post_config
//     )
//     .then((res) => {
//       console.log(res.data.progress);
//       this.setState({ progress: res.data.progress });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

let menuNav = [
  {
    name: "Menú",
    rute: "/"
  }, 
  {
    name: "Cerrar Sesión",
    rute: "/login"
  }
];
let headTable = [
  {
    dataField: 'nombre', 
    text: 'Áreas',
  },
  {
    text: ' botoncito ', 
    formatter: (cell, row) => revisar(),
  }
];

let revisar = () => {
  return(
    <Button as={Link} to="/categorias"> Revisar </Button>
  )
}

const Areas = () =>  {
  const [areas, setAreas] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/api/areas/lista')
    .then(res => {
      setAreas(res.data.area)
      // let auxAreas = res.data.area;
      // return (auxAreas);
    })
    axios.get('http://127.0.0.1:5000/api/categorias/lista')
    .then(res => {
      let auxCategorias = res.data.categoria;
      return(auxCategorias);
    })
  },[])

  return (
    <div>
      {/* <div className="Areas">
        <MyNavbar menuArr={menuNav}></MyNavbar>
      </div> */}
      <div className="Areas">
        <MyTable headArr={headTable} bodyArrAreas={areas}></MyTable>
      </div>
      {/* <div className="Areas">
        <MyFooter></MyFooter>
      </div> */}
    </div>
  );
};

export default Areas;