import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <div className="n-left">
        <div className="n-name">Ahmed</div>
       <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
          <li>
              <Link className="active" to="home" spy={true} smooth={true}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                <span>Serivces</span>
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                <span>Experience</span>
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                <span>Protfolio</span>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button ">Contact Us</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
