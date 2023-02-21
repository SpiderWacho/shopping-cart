import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Link,
} from "react-router-dom";
import { Navigation, Autoplay } from 'swiper';


import Header from './Header'

import airforce from '../img/airforce1.png'
import travis from '../img/travis.png'
import huarache from '../img/huarache.png'


import 'swiper/css';
import 'swiper/css/navigation';
import './Homepage.css';
import { Button } from './Button';


function Homepage() {

  return (
    <div className='App'>
      <Header />
      <div className='content'>
      <div className='column'>
        <div className='text-container'>
          <p className='column-text' id="text-1">Sport<span className='bold'>wear</span></p>
          <p  className='column-text' id="text-2">Fashion<span className='bold'>wear</span></p>
          <p className='column-text' id="text-3">Confort<span className='bold'>wear</span></p>
          <p className='column-text' id="text-4">Every<span className='bold'>wear</span></p>
        </div>
        <div className='button-container'>
        <Link to="store"><Button color={'primary'}>Shop Now</Button></Link>
        </div>
      </div>
      <Swiper
      modules={[Navigation, Autoplay]}
      className='swiper-container'
      spaceBetween={50}
      autoHeight={false}
      centeredSlides={true}
      slidesPerView={1}
      autoplay={true}
      navigation
    >
      <SwiperSlide className='slide'><img className='img' src={airforce}></img><h2>Nike Air Force</h2></SwiperSlide>
      <SwiperSlide className='slide'><img className='img' src={travis}></img><h2>Nike X Travis</h2></SwiperSlide>
      <SwiperSlide className='slide'><img className='img' src={huarache}></img><h2>Nike Huarache</h2></SwiperSlide>
      <div className='button-mobile'>
        <Link to="store"><Button color={'primary'}>Shop Now</Button></Link>
        </div>
    </Swiper>
      </div>
      <div className='footer'>
        <p>©Gaston Vecchio 2023</p>
      </div>

    </div>
  );
}

export default Homepage;
