import { useState } from 'react'
import styles from '../Styles/heart.module.css'

export default function Heart() {
  const [favorito, setFavorito] = useState(false)

  const alternarFavorito = () => {
    setFavorito(prev => !prev)
  }

  return (
    <span className={`material-icons ${styles.icon}`} onClick={alternarFavorito}>
      {favorito ? 'favorite' : 'favorite_border'}
    </span>
  )
}