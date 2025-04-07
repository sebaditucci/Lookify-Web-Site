import React from 'react'
import styles from '../ProdStyles/prodListCard.module.css'
import Stars from '../Components/Stars'
import Heart from '../Components/Heart'

export default function ProdListCard({id, imagen, nombre, descripcion, precio, estrellas, visibility}) {
  return (
    <div className = {styles[visibility]}>
        <div className = {styles.imgContainer}>
            <img src = {imagen} alt = {nombre} title = {nombre} loading = "lazy" className = {styles.img}/>
        </div>
        <div className = {styles.datos}>
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <Stars rating= {estrellas} totalStars= {5}/>
            <p>{`$${precio}`}</p>
            <div className= {styles.botones}>
              <button className = {`material-icons ${styles.boton}`}>shopping_cart</button>
              <Heart/>
            </div>
        </div>
    </div>
  )
}
