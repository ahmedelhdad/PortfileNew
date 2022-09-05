import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { AiOutlineFacebook} from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a
          href="https://api.whatsapp.com/send/?phone=201023508230&text&app_absent=0"
          target={"blank"}
          ><AiOutlineWhatsApp color="white" size={"3rem"} /></a>
          <a
          href="https://www.facebook.com/ahmedelhadad.elhadad.5"
          target={"blank"}
          ><AiOutlineFacebook color="white" size={"3rem"} /></a>
          <a
          href="https://github.com/ahmedelhdad"
          target={"blank"}
          ><AiFillGithub color="white" size={"3rem"} /></a>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
