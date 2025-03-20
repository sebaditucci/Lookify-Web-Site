import React from 'react'
import styles from '../Styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
        <div className = {styles.footer1}>
            <a className = {`material-icons ${styles.boton} button`} href = "#">arrow_upward</a>
            <div className = {styles.seccion}>
                <h4 className = {styles.titulo}>Información de Contacto </h4>
                <ul className = {styles.lista}>
                    <li><a className = {styles.link} href = "sebastiandit240@gmail.com">E-Mail</a></li>
                    <li><a className = {styles.link} href = "tel:+5491171404810">Número</a></li>
                </ul>
            </div>
            <div className = {styles.seccion}>
                <h4 className = {styles.titulo}>Enlaces a Redes</h4>
                <ul className = {styles.lista}>
                    <li><a className = {styles.link} href = "https://www.linkedin.com/in/sebastian-di-tucci/" target= '_blank'>LinkedIn</a></li>
                    <li><a className = {styles.link} href = "https://github.com/sebaditucci" target= '_blank'>GitHub</a></li>
                </ul>
            </div>
            <div className = {styles.seccion}>
                <h4 className = {styles.titulo}>Información Legal</h4>
                <ul className = {styles.lista}>
                    <li><a className = {styles.link} href = "#">Términos y Condiciones</a></li>
                    <li><a className = {styles.link} href = "#">Política de Privacidad</a></li>
                </ul>
            </div>
        </div>
        <div className = {styles.footer2}>
            <p>© 2025 Lookify | Desarrollado por Sebastián Di Tucci</p>
        </div>
    </footer>
  )
}
