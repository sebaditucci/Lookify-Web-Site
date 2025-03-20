import React from 'react'
import styles from '../HomeStyles/oferta.module.css'
import ofertaimg from '../assets/ofertaimg.png'

export default function Oferta({producto, titulo, descripcion, precioRegular, precioDescuento, bonus, tiempo}) {
  return (
    <div className = {styles.oferta}>
      <img src = {ofertaimg} title = {producto} alt = {`imagen de ${producto}`} className = {styles.imagen}/>
      <div className = {styles.texto}>
        <h3 className = {styles.titulo}>{titulo}</h3>
        <div className = {styles.textoHidden}>
          <p>{descripcion}</p>
          <p>💰 Precio Regular: <span style= {{ textDecoration: "line-through"}}> {precioRegular} ARS</span></p>
          <p>🔥 Precio con Descuento: {precioDescuento} ARS</p>
          <p>{bonus}</p>
          <p>{tiempo}</p>
        </div>
        <button className = {styles.button}>Comprar Ahora</button>
      </div>
    </div>
  )
}
