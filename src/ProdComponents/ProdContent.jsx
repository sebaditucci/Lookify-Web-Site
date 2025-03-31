import {React, useState, useEffect} from 'react'
import { obtenerDatos } from '../api';
import Producto from '../Components/ProductoCard';
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
    <main className = {styles.content}>
      {productos.map((prod) => {
        return filtro === "" || prod.clase === filtro ? (
          <Producto key={prod.id} imagen={prod.img} nombre={prod.nombre} precio={prod.precio} visibility="cardActive"/>
        ) : (
          <Producto key={prod.id} imagen={prod.img} nombre={prod.nombre} precio={prod.precio} visibility="cardHidden"/>
        );
      })}
    </main>
  )
}