import React from 'react'
import Section from './Section'

export default function Content() {
  return (
    <div>
        <Section titulo = "Productos Destacados" subtitulo= "Calidad y tendencia en un solo lugar" clase = "tendencia"/>
        {/*Testimonios de Clientes*/}
        <Section titulo = "Nuevos Lanzamientos" subtitulo= "Recién Llegados: Lo Nuevo en Moda te Espera" clase = "tendencia"/>
        {/*Por que elegirnos*/}
    </div>
  )
}
