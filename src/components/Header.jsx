import React from 'react'
import styles from '../styles/header.module.css'
import imagen from '../assets/imagenHeader.png'

export default function Header() {
  return (
    <header>
        <div className = {styles.headerwrapper}>
          <div className = {styles.titulos}>
            <p className = {styles.text}>Descubre</p>
            <h1 className = {styles.titulo}>Nuestra colección de verano</h1>
            <p className = {styles.textIt}>Estilo y frescura para esta temporada</p>
            <button className = {styles.boton}>Explorar Ahora</button>
          </div>
          <img src = {imagen} className = {styles.imagen}/>
        </div>
    </header>
  )
}
