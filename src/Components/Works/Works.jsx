import React from "react";
import "./works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";


export const Works = () => {
  

  const Theme = useContext(themeContext);
  const darkMode = Theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>Work for all these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elite. 
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br/>
          Lorem ipsum dolor sit amet adipisicing elit.
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.

        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABFFF94" }}>
        </div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div 
        initial={{ rotate: 45 }}
        animate={{ rotate: 0 }}
        transition={{duration: 3.5, type: 'spring'}}
        
        className="w-mainCircle">
         <div className="w-secCircle">
            <img src={Upwork} alt="" />
         </div>
         <div className="w-secCircle">
            <img src={Fiverr} alt="" />
         </div>
         <div className="w-secCircle">
            <img src={Amazon} alt="" />
         </div>
         <div className="w-secCircle">
            <img src={Shopify} alt="" />
         </div>
         <div className="w-secCircle">
            <img src={Facebook} alt="" />
         </div>

         <div className="blur s-blur" style={{ background: "#ABFFF94" }}>
        </div>

        </motion.div>
        {/* backround circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
