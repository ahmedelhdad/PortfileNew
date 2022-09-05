import React from "react";
import { Link } from "react-scroll";
import Toggle from "../Toggle/Toggle";
import { FaBattleNet } from 'react-icons/fa';
import { FaGg } from 'react-icons/fa';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./Navbar.css";
const Navbar = () => {

  return (
    <div
     className="navbar">
      <div className="container">
      <div className="n-left">
        <div className="n-name">Ahmed</div>
       <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
          <li>
              <Link  to="home" spy={true} smooth={true}>
                <span>Home</span>
                <AiOutlineHome/>
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                <span>Serivces</span>
                <FaBattleNet/>
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                <span>Experience</span>
                <FaGg/>
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                <span>Protfolio</span>
                <AiOutlineFundProjectionScreen/>
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
