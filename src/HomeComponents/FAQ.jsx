import React from 'react'
import FAQCard from './FAQCard'
import styles from '../HomeStyles/FAQ.module.css'

export default function FAQ() {
  return (
    <div className = {styles.faqContainer}>
        <div className = {styles.titulos}>
          <h2 className = {styles.titulo}>Preguntas Frecuentes</h2>
          <p className = {styles.subtitulo}>Resolvemos tus dudas al instante ❓ Encuentra aquí todas las respuestas.</p>
        </div>
        <div className = {styles.faq}>
          <FAQCard pregunta= "¿Cuánto tiempo tarda el envío?"
          respuesta = "Los envíos suelen tardar entre 3 y 7 días hábiles dependiendo de tu ubicación. Ofrecemos opciones de envío urgente si necesitas tu pedido más rápido. Recibirás un número de seguimiento para que puedas saber en todo momento dónde está tu pedido." />
          <FAQCard pregunta = "¿Cómo puedo realizar un pedido?" 
          respuesta = "Para hacer un pedido, simplemente agrega los productos que deseas a tu carrito, luego sigue los pasos en la página de pago. Aceptamos diversos métodos de pago, como tarjetas de crédito, débito y pago en efectivo a través de transferencias. ¡Es rápido y sencillo!"/>
          <FAQCard pregunta = "¿Puedo cambiar o devolver un producto?" 
          respuesta = "¡Sí! Si no estás completamente satisfecho con tu compra, puedes cambiar o devolver el producto dentro de los 30 días posteriores a la compra. Para más detalles, visita nuestra página de Política de Devoluciones."/>
          <FAQCard pregunta="¿Es seguro comprar en su tienda?" 
          respuesta="Sí, nuestra tienda utiliza tecnología de encriptación para proteger tus datos personales y de pago. Además, trabajamos con proveedores de pago confiables para garantizar transacciones seguras." />
          <FAQCard pregunta="¿Los productos tienen garantía?" 
          respuesta="Sí, todos nuestros productos cuentan con garantía. El tiempo y condiciones varían según el artículo, por lo que te recomendamos revisar la descripción del producto o contactarnos para más información." />
        </div>
    </div>
  )
}
