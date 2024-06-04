import React from 'react'
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'
import imgFacebook from '../../multimedia/logo_bitter_fondo_blanco.png' 


export const Header = (props) => {

  return (
    <header className="header">
        <img src={imgFacebook} alt="Logo Bitter" className='logo-bitter'></img>
        <Link to="/"><h1 className='titulo-logo'>Bitter & Sour</h1></Link>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}