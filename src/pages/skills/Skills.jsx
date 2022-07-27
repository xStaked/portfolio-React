import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import "./skills.Styles.scss";
const Skills = () => {
  return (
    <Container className="icons">
      <Row className="skills-text">
        <span>My Skills</span>
        <h3>Mis Habilidades</h3>
      </Row>
      <Row xl={12} lg={12} md={12} sm={12} className="container-icons">
        <div  className="my-3 d-flex flex-col justify-content-center align-items-center">
          <div xl={3} lg={3} md={3} sm={3} className="mx-5 d-flex flex-row justify-content-center align-items-center">
            <IoLogoJavascript className="js-icon mx-2" />
            <span>JavaScript</span>
          </div>

          <div xl={3} lg={3} md={3} sm={3} className=" mx-5 d-flex flex-row justify-content-center align-items-center">
            <SiNextdotjs className="next-icon mx-2" />
            <span>NextJS</span>
          </div>
          <div xl={3} lg={3} md={3} sm={3} className="mx-2 d-flex flex-row justify-content-center align-items-center">
            <SiTailwindcss className="tailwind-icon mx-2" />
            <span>TailwindCSS</span>
          </div>
        </div>
        <div xl={12} lg={12} md={12} sm={12} className="my-5 d-flex flex-col justify-content-around align-items-center">
          <div xl={3} lg={3} md={3} sm={3} className="mx-5 d-flex flex-row justify-content-center align-items-center">
            <FaReact className="react-icon mx-2" />
            <span>ReactJS</span>
          </div>
          <div xl={3} lg={3} md={3} sm={3} className="mx-5 d-flex flex-row justify-content-center align-items-center">
            <IoLogoCss3 className="css-icon mx-2" />
            <span>CSS</span>
          </div>
          <div xl={3} lg={3} md={3} sm={3} className=" d-flex flex-row justify-content-center align-items-center">
            <SiTypescript className="ts-icon mx-2" />
            <span>TypeScript</span>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Skills;
