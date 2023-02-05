import { Swiper, SwiperSlide } from 'swiper/react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Navigation, Autoplay } from 'swiper';
import {useState} from 'react'

import Header from './components/Header'
import Cart from './components/Cart'
import airforce from './img/airforce1.png'
import retroHigh from './img/retro1.png'
import huarache from './img/huarache.png'


import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { Button } from './components/Button';


function App() {
  const [products, setProducts] = useState({})
  const [activeCart, setActiveCart] =useState(false);

  const activateCart = () => {
    setActiveCart(true);
    console.log('working')
  }

  return (
    <div className='App'>
      <Header activateCart={activateCart}></Header>
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
      <SwiperSlide className='slide'><img className='img' src={retroHigh}></img><h2>Nike Retro High</h2></SwiperSlide>
      <SwiperSlide className='slide'><img className='img' src={huarache}></img><h2>Nike Huarache</h2></SwiperSlide>
    </Swiper>
      </div>
      <div className='footer'>
      </div>
      {activeCart ? <Cart /> : null}
      
    </div>
  );
}

export default App;
