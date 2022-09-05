import React from "react";
import "./Landing.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import VectorOne from "../../img/Vector1.png";
import VectorTwo from "../../img/Vector2.png";
import boy from "../../img/boy.jpg";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import humble from "../../img/glassesimoji.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
const Landing = () => {
  const transiton = { duration: 2, type: "spring" };
  return (
    <div className="landing" id="home">
      <div className="container">
        <motion.div
          initial={{ translateX: "-60%" }}
          whileInView={{ translateX: "0%" }}
          transition={transiton}
          className="left"
        >
          <h1>Hy! I Am</h1>
          <h1>Ahmed Elhdad</h1>
          <p>
            Frondend Developer with high level of experience in web designing
            and development producting the Quality work
          </p>
          <Link to="contact" spy={true} smooth={true}>
            <button className="button l-button">Hire me</button>
          </Link>
          <div className="socail">
            <a href="https://github.com/ahmedelhdad" target={"blank"}>
              {" "}
              <img src={Github} alt="Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-548553240?fbclid=IwAR1H8F82wub2TDWXrqWkbB5sCuHWJZT0dWWBYh1s59Wo5p8_BF6Lqxc1UXE"
              target={"blank"}
            >
              <img src={LinkedIn} alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/ahmed_hdad11/?igshid=YmMyMTA2M2Y="
              target={"blank"}
            >
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </motion.div>
        <div className="right">
          <img src={VectorOne} alt="Vector" />
          <img src={VectorTwo} alt="Vector" />
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "24%" }}
            transition={transiton}
            src={boy}
            alt="img"
          />
          <motion.img
            initial={{ left: "-40%" }}
            whileInView={{ left: "-30%" }}
            transition={transiton}
            src={humble}
            alt=""
          />
          <motion.div
            initial={{ left: "100%" }}
            whileInView={{ left: "0%" }}
            transition={transiton}
            className="thumbup"
          >
            <img src={thumbup} alt="" />
            <span>Best Design Award</span>
          </motion.div>
          <motion.div
            initial={{ left: "100%" }}
            whileInView={{ left: "60%" }}
            transition={transiton}
            className="Crown"
          >
            <img src={Crown} alt="" />
            <span>Web Developer</span>
          </motion.div>
          <div className="blur"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
