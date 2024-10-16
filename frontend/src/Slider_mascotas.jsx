import React from "react";
import { Carousel, CarouselCaption, CarouselItem, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import mascota1 from '../src/assets/images/mascota1.jpg';
import mascota2 from '../src/assets/images/mascota2.jpg';
import mascota3 from '../src/assets/images/mascota3.jpg';
import mascota4 from '../src/assets/images/mascota4.jpg';
import mascota5 from '../src/assets/images/mascota5.jpg';
import mascota6 from '../src/assets/images/mascota6.jpg';
import './Slider_mascotas.css';

export const Slider_mascotas = () => {
  return (
    <>
      
      <div className='containerCarousel'>
        <Carousel className='carouselMascotas'>
          <CarouselItem className='mascotas'>
            <Image src = {mascota1} className='mascota1' id='mascota-item'/>
          </CarouselItem>
          <CarouselItem>
            <Image src = {mascota2} className='mascota2'/>
          </CarouselItem>
          <CarouselItem>
            <Image src = {mascota3} className='mascota3'/>
          </CarouselItem>
          <CarouselItem>
            <Image src = {mascota4} className='mascota4'/>
          </CarouselItem>
          <CarouselItem>
            <Image src = {mascota5} className='mascota5'/>
          </CarouselItem>
          <CarouselItem>
            <Image src = {mascota6} className='mascota5'/>
          </CarouselItem>
          
        </Carousel>
      </div>
    </>
  );
  }
