import React, {FC} from 'react';
import Button from 'react-bootstrap/esm/Button';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

interface tableArr {
  headArr: {
    name: string;
    rute: string;
  }[];

  bodyArrItems ? : {
    id: number;
    nombre: string;
    cantidad: number;
    unidad_medida: number;
    fecha: string;
    stock: number;
  }[];

  bodyArrNewItems ? : {
    nombre: string;
    unidad_medida: number;
    critico: string;
    multiplicador: number;
  }[];

  bodyArrAreas ?: {
    areas: string;
  }[];

  bodyArrCategorias ?: {
    categorias: string;
  }[];
}

const MyTable: FC<tableArr> = ({headArr, bodyArrItems, bodyArrAreas, bodyArrCategorias, bodyArrNewItems}) => {
  let filas;
  if(bodyArrItems){
    filas = bodyArrItems.map((elem)=>{
                return(
                    <tr>
                      <td> {elem.id} </td>
                      <td> {elem.nombre} </td>
                      <td> {elem.cantidad} </td>
                      <td> {elem.unidad_medida} </td>
                      <td> {elem.fecha} </td>
                      <td> {elem.stock} </td>
                    </tr>
                )
              })
  }
  else if(bodyArrNewItems){
    filas = bodyArrNewItems.map((elem)=>{
              return(
                  <tr>
                    <td> {elem.nombre} </td>
                    <td> {elem.unidad_medida} </td>
                    <td> {elem.critico} </td>
                    <td> {elem.multiplicador} </td>
                  </tr>
              )
            })
  }
  else if(bodyArrAreas){
    filas = bodyArrAreas.map((elem)=>{
              return(
                  <tr>
                    <td> {elem.areas} </td>
                    <td>
                      <Button as={Link} to="/categorias"> Revisar </Button>
                    </td>
                  </tr>
              )
            })
  }
  else if(bodyArrCategorias){
    filas = bodyArrCategorias.map((elem)=>{
              return(
                  <tr>
                    <td> {elem.categorias} </td>
                    <td>
                      <Button as={Link} to="/items"> Revisar </Button>
                    </td>
                  </tr>
              )
            })
  }

  return(
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headArr.map((elem)=>{
              return(
                <th key={"#" + elem.rute}> {elem.name}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
            {filas}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
