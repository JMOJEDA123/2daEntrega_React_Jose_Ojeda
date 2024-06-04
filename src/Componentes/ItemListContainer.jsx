import React, { useEffect, useState } from 'react';
// import data from "../Data/productos.json";
import data from "../Data/autos.json";
import categories from "../Data/categorias.json";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);

  let [titulo, setTitulo] = useState("Productos");
  
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo("Mostrando Todas las Marcas de Autos");
          setProductos(res);
          
        } else {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          const x= res.filter((prod) => (prod.marca).toLowerCase() === categoryId);
          setProductos(x);
        }
      })
      
  }, [categoryId]);
  

  return (
    <div className="item-list-container">
      <h1 className='titulo-categoria'>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}