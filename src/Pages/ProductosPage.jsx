import {React, useState} from 'react'
import ProdContent from '../ProdComponents/ProdContent'
import ProdFilters from '../ProdComponents/ProdFilters'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import styles from '../ProdStyles/prodPage.module.css'

export default function ProductosPage() {
  const [filtro, setFiltro] = useState(""); 
  return (
    <div className = {styles.page}>
      <Nav/>
      <section className = {styles.prodPage}>
        <ProdFilters setFiltro = {setFiltro}/>
        <ProdContent filtro = {filtro}/>
      </section>
      <Footer/>
    </div>
  )
}
