import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '../styles/carrusel.module.css';
import Card from './Card';


export default function Carrusel({productos, prevRef, nextRef}) {
  return (
    <Swiper
    modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={4}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      className = {styles.carrusel}
    >
        {
            productos.map(prod => (
                <SwiperSlide key = {prod.id}>
                    <Card imagen = {prod.img} nombre = {prod.nombre} precio = {prod.precio}/>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}
