import React, {FC} from 'react';
  
interface props{
    nombres_items:{
        area:string;
        categoria:string;
    }[],
    nombres_areas:{
        area:string;
    }[],
}

const MyTittle: FC<props> = ({nombres_items, nombres_areas}) => {
    let areas;
    let categorias;
    let aux;
    if(nombres_items){
        aux = nombres_items.map((elem)=>{
            areas = elem.area;
            categorias = elem.categoria;
        })
        return(
            <h2>Usted se encuentra en {areas}, {categorias}</h2>
        )
    }
    else if(nombres_areas){
        aux = nombres_areas.map((elem)=>{
            areas = elem.area;
        })
        return(
            <h2>Se encuentra en "{areas}"</h2>
        )
    }
    return(
        <h1></h1>
    )
};

export default MyTittle;