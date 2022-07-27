import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import heroImage from "../../assets/heroImage.png";
import { Container, Row, Col } from "react-bootstrap";
import "./home.Styles.scss";
import Skills from "../skills/Skills";
import Works from "../works/Works";
import Experience from "../experience/Experience";
const Home = () => {
  return (
    <>
      <Navigation />

      <Row>
        <Col xl={5} lg={5} className="heroImg">
          <img src={heroImage} alt="" />
        </Col>
        <Col xl={7} lg={7} id="container-home">
          <h1 className="title">
            Hola, soy <span>Sergio </span>
          </h1>
          <p>
            Soy un desarrollador FullStack con experiencia en el Frontend. Mis
            principales herramientas son React y NextJS. Me gusta la ciencia y
            la tecnologia. Espero iniciar pronto una carrera en Matemáticas
            puras
          </p>
          <a
            href="#"
            className="cv"
          >
            Descarga mi CV!
          </a>
        </Col>
      </Row>
      <Skills id="habilidades"/>
      <Works/>
      <Experience/>
    </>
  );
};

export default Home;
