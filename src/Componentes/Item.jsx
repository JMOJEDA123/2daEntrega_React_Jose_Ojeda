import React from 'react'
import { Link } from 'react-router-dom'
// import myImage from '../multimedia/img1-jeep-renegade-nuevo.jpeg';


export const Item = ( {producto} ) => {

  console.log(producto.urlFoto);

  return (
    <div className="producto">
      <h2>{producto.marca} {producto.modelo} {producto.agno}</h2>
      <img className= 'imagen' src={producto.urlFoto} alt={producto.marca} />
      {/* <img src={myImage} /> */}
      <h2>{producto.condicion}</h2>
      <p className='precio'>USD {producto.precio}</p>
      <div className='div-botones'>
        <Link to={`/item/${producto.id}`}><button className='boton'>Ver Detalles</button></Link>
        <a><button className='boton'>Simula tu Credito</button></a>
      </div>
      

    </div>
  )
}