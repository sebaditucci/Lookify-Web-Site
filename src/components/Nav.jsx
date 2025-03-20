import {React, useState} from 'react'
import styles from '../Styles/nav.module.css'
import logo from '../assets/logo.png'

export default function Nav() {
  const [estado, setEstado] = useState(false)

  return (
    <nav className = {styles.nav}>
      <div className = {styles.upperMenu}>
        <ul className = {styles.upperLista}>
          <li><button className = {`material-icons ${styles.upperButtons}`}>search</button></li>
          <li><button className = {`material-icons ${styles.upperButtons}`}>shopping_cart</button></li>
        </ul>
        <ul className = {styles.upperLista}>
          <li><button className = {styles.upperButtons}>Sign In</button></li>
          <li><button className = {styles.upperButtons}>Log In</button></li>
        </ul>
      </div>
      <div className= {styles.menu}> 
        <h1 hidden>Lookify</h1>
        <img src = {logo} title = "Lookify" alt = "logo de Lookify" className = {styles.logo}/>
        <button className = {`material-icons ${styles.menuButton}`} onClick={() => setEstado(!estado)}>menu</button>
        <ul className = {styles.lista}>
          <li><button className = {styles.boton}>Home</button></li>
          <li><button className = {styles.boton}>Productos</button></li>
          <li><button className = {styles.boton}>Sobre Nosotros</button></li>
          <li><button className = {styles.boton}>Contactanos</button></li>
          <li><button className = {`material-icons ${styles.botonGoogle}`}>search</button></li>
          <li><button className = {`material-icons ${styles.botonGoogle}`}>shopping_cart</button></li>
        </ul>
        <ul className = {styles.lista}>
          <li><button className = {styles.boton}>Sign In</button></li>
          <li><button className = {styles.boton}>Log In</button></li>
        </ul>
      </div>
      <div style= {{ height: estado ? "150px" : "0px"}} className = {styles.menuContainer}>
        <ul className = {styles.menuLista} style= {{ opacity: estado ? "1" : "0"}}>
          <li><button className = {styles.botonMenu}>Home</button></li>        
          <li><button className = {styles.botonMenu}>Productos</button></li>
          <li><button className = {styles.botonMenu}>Sobre Nosotros</button></li>
          <li><button className = {styles.botonMenu}>Contactanos</button></li>
        </ul>
      </div>
    </nav>
  )
}
