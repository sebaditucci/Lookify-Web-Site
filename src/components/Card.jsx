import React from 'react'
import styles from '../styles/card.module.css'

export default function Card({imagen, nombre, precio}) {
  return (
    <div className = {styles.card}>
        <div className = {styles.imgContainer}>
            <img src = {imagen} alt = {nombre} title = {nombre} className = {styles.img}/>
        </div>
        <div className = {styles.datos}>
        <h4>{nombre}</h4>
        <p>{`$${precio}`}</p>
        </div>
    </div>
  )
}
