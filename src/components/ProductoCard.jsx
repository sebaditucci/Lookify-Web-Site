import React from 'react'
import styles from '../styles/productoCard.module.css'

export default function ProductoCard({imagen, nombre, precio, visibility}) {
  return (
    <div className = {styles[visibility]}>
        <div className = {styles.imgContainer}>
            <img src = {imagen} alt = {nombre} title = {nombre} loading = "lazy" className = {styles.img}/>
        </div>
        <div className = {styles.datos}>
        <h4>{nombre}</h4>
        <p>{`$${precio}`}</p>
        </div>
    </div>
  )
}
