import {React, useState, useEffect, useRef} from 'react'
import styles from '../styles/section.module.css'
import Carrusel from './Carrusel';

export default function Section({titulo, subtitulo, clase}) {
    const [productos, setProductos] = useState([]);

    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setProductos(data));
    },[])

    const productosFiltrados = productos.filter((producto) => producto.clase === clase);

    return (
        <section className = {styles.section}>
            <h2 className = {styles.titulo}>{titulo}</h2>
            <h3 className = {styles.subtitulo}>{subtitulo}</h3>
            <div className = {styles.carrusel}>
                <button ref= {prevButtonRef} className = {`material-icons ${styles.button}`}>chevron_left</button>
                <Carrusel productos= {productosFiltrados} prevRef = {prevButtonRef} nextRef= {nextButtonRef}/>
                <button ref= {nextButtonRef} className = {`material-icons ${styles.button}`}>chevron_right</button>
            </div>
        </section>
    )
}
