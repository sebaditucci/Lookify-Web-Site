import React from 'react'
import styles from '../styles/nav.module.css'
import logo from '../assets/logo.png'

export default function Nav() {
  return (
    <nav>
        <img src = {logo} title = "logo" alt = "logo de lookify" className = {styles.logo}/>
        <ul className = {styles.lista}>
          <li><button className = {styles.boton}>Home</button></li>
          <li><button className = {styles.boton}>Productos</button></li>
          <li><button className = {styles.boton}>Sobre Nosotros</button></li>
          <li><button className = {styles.boton}>Contactanos</button></li>
          <li><button className = {`material-icons ${styles.botonGoogle}`}>search</button></li>
          <li><button className = {`material-icons ${styles.botonGoogle}`}>shopping_cart</button></li>
        </ul>
        <ul className = {styles.lista}>
          <li><button className = {styles.boton}>Sign In</button></li>
          <li><button className = {styles.boton}>Log In</button></li>
        </ul>
    </nav>
  )
}
