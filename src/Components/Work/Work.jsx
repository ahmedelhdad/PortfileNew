import React, { useState } from "react";
import Data from "../data/Data";
import "./Work.css";
import { FaGithub } from "react-icons/fa";
import { FaGoogleWallet } from "react-icons/fa";
import { motion } from "framer-motion";
const Work = () => {
  const transiton = { duration: 2, type: "spring" };
  const [projects, setProjects] = useState(Data);
  const handlerWork = projects.map((item) => {
    return (
      <div className="box" key={item.id}>
        <img src={item.image} alt={item.title} />
        <div className="over">
          <a  target={"blank"} href={item.gitHub}>
            <FaGithub />
          </a>
          <a 
          target={"blank"}
          href={item.url}>
            <FaGoogleWallet />
          </a>
        </div>
      </div>
    );
  });
  const handler = (e) => {
  const updatedList = Data.filter((project) =>project.type === e.target.type )
    setProjects(updatedList)
  };
  return (
    <div className="work" id="portfolio">
      <div className="container">
        <motion.ul
          initial={{ translateX: "99%" }}
          whileInView={{ translateX: "0px" }}
          translate={transiton}
          className="skills"
        >
          <li className="button" onClick={() => setProjects(Data)}>
            All
          </li>
          <li className="button" onClick={handler} type="htmlcss">
            Html / Css
          </li>
          <li className="button" onClick={handler} type="javascript">
            Javascript
          </li>
          <li className="button" onClick={handler} type="bootsrap">
            Bootsrap
          </li>
          <li className="button" onClick={handler} type="tailwind">
            Tailwind
          </li>
          <li className="button" onClick={handler} type="react">
            React
          </li>
          <li className="button" onClick={handler} type="next">
            Next
          </li>
        </motion.ul>
      </div>
      <motion.div
      initial={{ translateX: "-99%" }}
      whileInView={{ translateX: "0px" }}
      translate={transiton}
       className="container img-work">{handlerWork}</motion.div>
    </div>
  );
};

export default Work;
