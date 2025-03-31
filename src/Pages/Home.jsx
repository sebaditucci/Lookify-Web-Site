import React from 'react'
import Nav from '../Components/Nav'
import Header from '../HomeComponents/Header'
import Content from '../HomeComponents/Content'
import Footer from '../Components/Footer'
import styles from '../HomeStyles/home.module.css'


export default function Home() {
  return (
    <div className = {styles.page}>
      <Nav/>
      <Header/>
      <Content/>
      <Footer />
    </div>
  )
}