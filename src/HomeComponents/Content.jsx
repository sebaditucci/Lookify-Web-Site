import React from 'react'
import Productos from './Productos'
import Oferta from './Oferta'
import FAQ from './FAQ'
import styles from '../HomeStyles/content.module.css'


export default function Content() {
  return (
    <main className = {styles.content}>
        <Productos titulo = "Productos Destacados" subtitulo= "✅ Calidad y tendencia en un solo lugar" clase = "tendencia"/>
        <Oferta titulo = "Campera Universitaria en Oferta - 25% 🔥" 
        descripcion = "✨ Diseño cómodo, ligero y resistente para salir con estilo. Disponible en varios colores." precioRegular = "$50.000" 
        precioDescuento= "$37.000" bonus = "🚚 ¡Envío GRATIS a todo el país si compras antes del domingo!"
        tiempo = "⚠️ ¡Stock limitado! Aprovechá la promo antes de que se acabe."/>
        <Productos titulo = "Nuevos Lanzamientos" subtitulo= "🆕 Recién Llegados: Lo Nuevo en Moda te Espera!" clase = "nuevo"/>
        <Productos titulo = "Más Vendidos" subtitulo= "Los favoritos de nuestros clientes 🔥 ¡No te quedes sin el tuyo!" clase = "mas_vendidos"/>
        <FAQ/>
    </main>
  )
}
