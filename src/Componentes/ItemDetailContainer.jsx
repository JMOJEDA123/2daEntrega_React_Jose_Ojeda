import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../Data/autos.json";
import { AutosDetalles } from './AutosDetalles';



const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => (prod.id) === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div className='item-detail-container'>
      {
      producto && <AutosDetalles auto={producto} />      
      }
    </div>
  )
  
}

export default ItemDetailContainer