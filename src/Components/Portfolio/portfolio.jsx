import React from 'react'
import './portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import Ecommerce from "../../img/ecommerce.png"
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Portfolio = () => {

  const Theme = useContext(themeContext);
  const darkMode = Theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>
      {/* heading */}
      <span style={{color: darkMode? 'white' : ''}} >Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
     <Swiper
     spaceBetween={25}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
     >
       <SwiperSlide>
        <img src={Sidebar} alt="" />
       </SwiperSlide>

       <SwiperSlide>
        <img src={Ecommerce} alt="" />
       </SwiperSlide>

       <SwiperSlide>
        <img src={MusicApp} alt="" />
       </SwiperSlide>

       <SwiperSlide>
        <img src={HOC} alt="" />
       </SwiperSlide>


     </Swiper>

    </div>
  )
}

export default Portfolio