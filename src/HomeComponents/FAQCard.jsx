import React from 'react'
import styles from '../HomeStyles/FAQCard.module.css'

export default function FAQCard({pregunta, respuesta}) {
  return (
    <div className = {styles.container}>
      <div className = {styles.faqCard}>
        <div className = {styles.frente}>
          <p className= {`material-icons ${styles.icono}`}>help_outline</p>
          <h4 className = {styles.pregunta}>{pregunta}</h4>
        </div>
        <div className = {styles.dorso}>
          <p className = {styles.respuesta}>{respuesta}</p>
        </div>
      </div>
    </div>
  )
}
