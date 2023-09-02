import React from 'react';
import './Services.css';
import HeartEmoji from "../img/heartemoji.png";
import Glassess from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from '../Components/FloatingDiv/Card/Card';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const transition = {duration : 1, type: 'spring'}
   
  const Theme = useContext(themeContext);
  const darkMode = Theme.state.darkMode;

  return (
   <div className="services" id='Services'>
    {/* left side */}
    <div className="awesome">
      <span  style={{color: darkMode? 'white' : ''}}>My Awesome</span>
      <span>Services</span>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elite. <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      <button className='button s-button'>Download CV</button>
      <div className="blur s-blur" style={{ background: "#ABFFF94"}}> </div>
    </div>

   {/*  right side */}
   <div className="cards">

   <motion.div 
   whileInView={{left: '18rem'}}
   initial={{right: '40%'}}
   transition={transition}
   style={{left: '14rem'}}>
     <Card
     emoji = {HeartEmoji}
     heading = {'Design'}
     detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"} />  
   </motion.div>

   <motion.div 
   whileInView={{right: '14rem'}}
   initial={{right: '25rem'}}
   transition={transition}

   style={{top: '12rem', left: "-4rem"}}>
     <Card
     emoji = {Glassess}
     heading = {'Developer'}
     detail = {"Html, Css, Javascript, React, photoshop xd"} />  
   </motion.div>

   <motion.div 
   whileInView={{left: '18rem'}}
   initial={{right: '40%'}}
   transition={transition}
   style={{top: '19rem', left: "12rem"}}>
     <Card
     emoji = {Humble}
     heading = {'UI/UX'}
     detail = {"lorem Lorem ipsum dolor sit amet consectetur adipisicing elite"} />  
   </motion.div>
   <div className="blur s-blur2" style={{ background: "var(--purple)" }}> </div>

   </div>
   </div>
  )
}

export default Services