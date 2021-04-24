import React, {FC} from 'react';
// import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
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
  if(bodyArrItems){
      columns= headArr
      rows=bodyArrItems
  }
  else if(bodyArrAreas){
    columns= headArr
    rows=bodyArrAreas
  }
  else if(bodyArrCategorias){
      columns= headArr
      rows=bodyArrCategorias    
  }
  else if(bodyArrNewItems){
    columns= headArr
    rows=bodyArrNewItems
  }

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

export default MyTable;