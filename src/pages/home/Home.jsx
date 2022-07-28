import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import heroImage from "../../assets/heroImage.png";
import CV from "../../assets/CV Sergio Romero.pdf"
import { Row, Col } from "react-bootstrap";
import Skills from "../skills/Skills";
import Works from "../works/Works";
import Experience from "../experience/Experience";
import Contact from "../contact/Contact";
import Footer from "../../components/footer/Footer";
import "./home.Styles.scss";
const Home = () => {
  return (
    <>
      <Navigation />

      <Row>
        <Col xl={5} lg={5} className="heroImg">
          <img src={heroImage} alt="sergio-hero-logo" className="hero-img"/>
        </Col>
        <Col xl={7} lg={7} id="container-home">
          <h1 className="title">
            Hola, soy <span className="sergio">Sergio </span>
          </h1>
          <p>
            Soy un desarrollador FullStack con experiencia en el Frontend. Mis
            principales herramientas son React y NextJS. Me gusta la ciencia y
            la tecnologia. Espero iniciar pronto una carrera en Matemáticas
            puras
          </p>
          <a
            href={CV}
            target="_blank"
            className="cv"
          >
            Descarga mi CV!
          </a>
        </Col>
      </Row>
      <Skills/>
      <Works/>
      <Experience/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
