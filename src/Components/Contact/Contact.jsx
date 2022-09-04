import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const transiton = { duration: 2, type: "spring" };

  const [done, setDone] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ov33ex2",
        "template_op2k1n3",
        form.current,
        "0OnlmpaP7j2gVuJWH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ translateX: "-99%" }}
          whileInView={{ translateX: "0px" }}
          translate={transiton}
          className="left"
        >
          <h1>Get in Touch</h1>
          <h1>Contact me</h1>
        </motion.div>
        <motion.form
          initial={{ translateX: "99%" }}
          whileInView={{ translateX: "0px" }}
          translate={transiton}
          ref={form}
          onSubmit={sendEmail}
        >
          <input type="text" name="user_name" value={name} placeholder="Name" />
          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={message}
            placeholder="Message"
          ></textarea>
          <button type="submit" value="Sent" className="button">
            Sent
          </button>
          <span>{done && "Thank For Contactin me"}</span>
        </motion.form>
        <div className="blur"></div>
      </div>
    </div>
  );
};

export default Contact;
