import React from "react";
import "./intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import thumbup from "../img/thumbup.png";
import Crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv/FloatingDiv";
import { themeContext } from "../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };

  const Theme = useContext(themeContext);
  const darkMode = Theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am </span>
          <span>Ola Tunji</span>
          <span>
            Just a Frontend Developer trying to make Quality works with my
            Experience
          </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="http://tom.com">
            <img src={Github} alt="github" />
          </a>
          <a href="http://">
            {" "}
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="http://">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-28%" }}
          whileInView={{ left: "-15%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "80%" }}
          whileInView={{ left: "75%" }}
          transition={transition}
          style={{ top: "-4%", left: "75%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} />
        </motion.div>

        <motion.div 
        initial={{ left: "5rem", top: "19rem" }}
        whileInView={{ left: "4rem" }}
        transition={transition}

        style={{ top: "19rem", left: "3rem" }}
        className="floating-div">
          <FloatingDiv image={thumbup} />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255" }}>
          {" "}
        </div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
