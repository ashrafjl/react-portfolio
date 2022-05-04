import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Services from "../Service/Services";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Andrew</div>
        <Toggle />
      </div>
      <div className="n-right" id="Navbar">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link spy={true} to={'Navbar'} activeClass={'activeClass'} smooth={true}>
              <li>Home</li>
            </Link>
            <Link spy={true} to={'Services'} activeClass={'activeClass'} smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to={'Experience'} activeClass={'activeClass'} smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to={'Portfolio'} activeClass={'activeClass'} smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to={'Testimonials'} activeClass={'activeClass'} smooth={true}>
              <li>Testimonilas</li>
            </Link>
          </ul>
        </div>
        <button className="button n-btton">Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
