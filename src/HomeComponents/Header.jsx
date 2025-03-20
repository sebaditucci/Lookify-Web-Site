import React from 'react'
import styles from '../HomeStyles/header.module.css'
import imagen from '../assets/imagenHeader.png'

export default function Header() {
  return (
    <header>
        <div className = {styles.headerwrapper}>
          <div className = {styles.titulos}>
            <p className = {styles.text}>Descubre</p>
            <h2 className = {styles.titulo}>Nuestra colección de verano</h2>
            <p className = {styles.textIt}>Estilo y frescura para esta temporada</p>
            <button className = {styles.boton}>Explorar Ahora</button>
          </div>
          <img src = {imagen} loading= "lazy" className = {styles.imagen}/>
        </div>
    </header>
  )
}
