import {React, useState, useEffect} from 'react'
import { obtenerDatos } from '../api';
import ProdCard from '../Components/ProductoCard';
import ProdList from '../ProdComponents/ProdListCard'
import styles from '../ProdStyles/prodContent.module.css'

export default function ProdContent({filtro, orden}) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function cargarDatos() {
      const datos = await obtenerDatos();
      if (datos) {
        setProductos(datos);
      }
    }
    cargarDatos();
  }, []);

  return (
    <main className = {styles[orden]}>
      {
        productos.map((prod) => {
            return (
              orden == "grid" ? (
                filtro === "" || prod.clase === filtro ? (
                  <ProdCard key={prod.id} imagen={prod.img} nombre={prod.nombre} precio={prod.precio} visibility="cardActive"/>
                ) : (
                  <ProdCard key={prod.id} imagen={prod.img} nombre={prod.nombre} precio={prod.precio} visibility="cardHidden"/>
                )) : (
                  filtro === "" || prod.clase === filtro ? (
                    <ProdList key={prod.id} imagen={prod.img} nombre={prod.nombre} descripcion= {prod.descripcion} precio={prod.precio} estrellas = {prod.estrellas} visibility="cardActive"/>
                  ) : (
                    <ProdList key={prod.id} imagen={prod.img} nombre={prod.nombre} descripcion= {prod.descripcion} precio={prod.precio} estrellas = {prod.estrellas} visibility="cardHidden"/>
                  ))
            );

          })
      }
    </main>
  )
}