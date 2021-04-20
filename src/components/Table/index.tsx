import React, {FC} from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Button from 'react-bootstrap/Button';
//import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

interface tableArr {
  headArr: {
    dataField: string;
    text: string;
  }[]; //aca me va a llegar el formatter: (ID QUE QUIERO)

  bodyArrItems ? : {
    id: number;
    codigo: string;
    nombre: string;
    cantidad: number;
    unidad_medida: number;
    critico: number;
    fecha: string;
  }[];

  bodyArrNewItems ? : {
    id: number;
    codigo: string;
    nombre: string;
    unidad_medida: number;
    critico: string;
    cantidad: number;
    id_categoria: number;
  }[];

  bodyArrAreas ? : {
    id: number;
    areas: string;
  }[];

  bodyArrCategorias ? : {
    id_area: number;
    categorias: string;
  }[];
}

const MyTable: FC<tableArr> = ({headArr, bodyArrItems, bodyArrAreas, bodyArrCategorias, bodyArrNewItems}) => {
  let columns=[];
  let rows=[];
  let button=[];
  if(bodyArrItems){
      columns= headArr
      rows=bodyArrItems
  }
  else if(bodyArrAreas){
    columns= headArr
    console.log(columns);
    rows=bodyArrAreas
  }
  else if(bodyArrCategorias){
      columns= headArr
      rows=bodyArrCategorias    
  }
  else if(bodyArrNewItems){
    columns= headArr
    rows=bodyArrNewItems
    button = <Button variant="primary" type="submit" value="Ingresar" /> 
  }

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   axios.post('http://127.0.0.1:5000/api/items/insert', {rows} )
  //   .then(res => {
  //     console.log(res);
  //   })
  // }
  

  return (
    <BootstrapTable 
      keyField='id' 
      data={ rows } 
      columns={ columns } 
      pagination={ paginationFactory() }
      striped
      hover
      condensed
    />
  );
}
  
    
{/* // ========================================================
    
      // let products;
      // if(bodyArrItems){
      //   products = bodyArrItems.map((elem)=>{
      //     return(
      //       <tr>
      //         <td> {elem.id} </td>
      //         <td> {elem.nombre} </td>
      //         <td> {elem.cantidad} </td>
      //         <td> {elem.unidad_medida} </td>
      //         <td> {elem.fecha} </td>
      //         <td> {elem.stock} </td>
      //       </tr>
      //     )
      //   })
      // }
      // else if(bodyArrNewItems){
      //   products = bodyArrNewItems.map((elem)=>{
      //     return(
      //       <tr>
      //         <td> {elem.nombre} </td>
      //         <td> {elem.unidad_medida} </td>
      //         <td> {elem.critico} </td>
      //         <td> {elem.multiplicador} </td>
      //       </tr>
      //     )
      //   })
      // }
      // else if(bodyArrAreas){
      //   products = bodyArrAreas.map((elem)=>{
      //     return(
      //       <tr>
      //         <td> {elem.areas} </td>
      //         <td>
      //           <Button as={Link} to="/categorias"> Revisar </Button>
      //         </td>
      //       </tr>
      //     )
      //   })
      // }
      // else if(bodyArrCategorias){
      //   products = bodyArrCategorias.map((elem)=>{
      //     return(
      //       <tr>
      //         <td> {elem.categorias} </td>
      //         <td>
      //           <Button as={Link} to="/items"> Revisar </Button>
      //         </td>
      //       </tr>
      //     )
      //   })
      // }

      // let columns = headArr.map((elem)=>{
      //   return(
      //     <th key={"#" + elem.rute}> {elem.name}</th>
      //   )
      // });

      // return(
      //   <div>
      //   <Table striped bordered hover>
      //     <thead>
      //       <tr>
      //         {headArr.map((elem)=>{
      //           return(
      //             <th key={"#" + elem.rute}> {elem.name}</th>
      //           )
      //         })}
      //       </tr>
      //     </thead>
      //     <tbody>
      //         {products}
      //     </tbody>
      //   </Table>
      // </div>
      // ) */}


export default MyTable;