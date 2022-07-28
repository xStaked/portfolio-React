import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComponent from "../../components/card/Card";
import "./works.Styles.scss";
const Works = () => {
  return (
    <Container className="my-5" id="works">
      <Row>
        <Col className="text-center">
          <span className="sub-title">Portfolio</span>
          <h3 className="title-portfolio">Mis proyectos</h3>
        </Col>
        <Row xl={12} lg={12} md={12} sm={12} className="container-icons">
          <Row className="d-flex justify-content-center align-items-center my-2">
            <CardComponent
              type={"Frontend"}
              title={"Torres de Hanoi"}
              description={
                "Proyecto hecho usando estructuras de datos ,React, Bootstrap."
              }
              despliegueLink={"https://hanoi-towers-react.vercel.app/"}
              repoLink={"https://github.com/SRomero21/Hanoi-towers-react"}
            />
            <CardComponent
              type="Frontend"
              title="ChuckNorris"
              description="Este fue hecho consumiendo la API de ChuckNorris. Esta hecho con
                ReactJ, Bootstrap y se uso Axios para el consumo del API"
              despliegueLink="https://chuck-deploy.vercel.app/"
              repoLink="https://github.com/SRomero21/chuckDeploy-"
            />
            <CardComponent
              type="Backend"
              title="Ecommerce API"
              description="Proyecto hecho en NodeJS con Express, usando Postgress como base
                datos y autentificación JWT"
              despliegueLink="https://ecommerce-academlo-api.herokuapp.com/api/v1/users"
              repoLink="https://github.com/SRomero21/ecommerce-API"
            />
          </Row>
          <Row className="d-flex justify-content-center align-items-center my-5">
            <CardComponent
              type="Frontend"
              title="Ecommerce"
              description=" Proyecto colaborativos con varios compañeros, usamos React, CSS
                puro y se implemento PayPal como pasarela de pagos"
              despliegueLink="https://ecommerce-chi-ten.vercel.app/"
              repoLink="https://github.com/SRomero21/Ecommerce"
            />

            <CardComponent
              type="Frontend"
              title="GitHub Browser"
              description=" Este fue hecho consumiendo la API de ChuckNorris. Esta hecho con
                ReactJ, Bootstrap y se uso Axios para el consumo del API"
              despliegueLink="https://github-v2.vercel.app/"
              repoLink="https://github.com/SRomero21/github-v2"
            />
            <CardComponent
              type="Full-Stack"
              title="Deliveries"
              description="Proyecto en desarrollo"
              repoLink="https://github.com/SRomero21/Deliveries"
            />
          </Row>
        </Row>
      </Row>
    </Container>
  );
};

export default Works;
