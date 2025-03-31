import React from 'react'
import styles from '../ProdStyles/prodFilters.module.css'

export default function ProdFilters({setFiltro}) {
  console.log("ProdFilters renderizado");
  return (
    <div className = {styles.botones}>
      <button className = {`material-icons ${styles.botonView}`}>grid_view</button>
      <button className = {`material-icons ${styles.botonView}`}>view_list</button>
      <details className = {styles.details}>
        <summary>Filtros</summary>
        <ul className = {styles.filtros}>
          <li className = {styles.item}><button onClick = {() => setFiltro("")} className= {styles.botonFiltro}>Todos</button></li>
          <li className = {styles.item}><button onClick = {() => setFiltro("nuevo")} className= {styles.botonFiltro}>Nuevos</button></li>
          <li className = {styles.item}><button onClick = {() => setFiltro("tendencia")} className= {styles.botonFiltro}>Tendencias</button></li>
          <li className = {styles.item}><button onClick = {() => setFiltro("mas_vendidos")} className= {styles.botonFiltro}>Mas Vendidos</button></li>
        </ul>
      </details>
    </div>
  )
}
