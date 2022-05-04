import "./Services.css";
import Heartemoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from './ashrafjamal.pdf'
import { motion } from 'framer-motion'
const Services = () => {
  const transition = {duration: 1, type: 'spring'}
  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span>My Aesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
          laborum
          <br /> aliquam in maiores nostrum non voluptates ipsam sunt
          reprehenderit ipsa.
        </span>
        <a href={Resume}><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div 
        initial={{left: '25rem'}}
        whileInView={{left: '25rem'}}
        transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={Heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe XD"}
          />
        </motion.div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Glasses}
            heading={"UI/UX"}
            detail={"Here are some text that talks about design"}
          />
        </div>
        <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  );
};
export default Services;
