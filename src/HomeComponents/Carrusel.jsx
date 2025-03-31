import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../HomeStyles/carrusel.module.css';
import Producto from '../Components/ProductoCard';


export default function Carrusel({productos, prevRef, nextRef}) {
  return (
    <Swiper
    modules={[Navigation]}
      spaceBetween={0}
    
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      breakpoints={{
        50: {slidesPerView: 3},
        700: { slidesPerView: 4 },
        1000: { slidesPerView: 5 }
      }}
      className = {styles.carrusel}
    >
        {
            productos.map(prod => (
                <SwiperSlide key = {prod.id}>
                    <Producto imagen = {prod.img} nombre = {prod.nombre} precio = {prod.precio} visibility= "cardActive"/>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}
