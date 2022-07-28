import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./experience.Styles.scss";
const Experience = () => {
  
  return (
    <Container id="experience">
      <Row>
        <Col className="text-center">
          <span className="sub-title">Experience</span>
          <h3 className="title-exp">Experiencia</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        
        
        <Card className="my-2 mx-2" style={{ width: "32rem", height: "18rem" }}>
          <Card.Header className="sub-title text-center">
            App3ar | 2021 - Marzo/2022{" "}
          </Card.Header>
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="title-front">Frontend developer</h3>
            <p className="text-center">
              Me desempeñe como Desarrollador Frontend, parte de mis tareas
              diarias eran: Hablar con clientes, maquetar y desarrollador
              interfaces web tanto en codigo como en WordPress
            </p>
            <ListGroup horizontal>
              <span className="li-item mx-1">React</span>
              <span className="li-item mx-1">SASS</span>
              <span className="li-item mx-1">WordPress</span>
              <span className="li-item mx-1">Bootstrap</span>
            </ListGroup>
          </Card.Body>
        </Card>
        
          <Card
            className="my-2 mx-2"
            style={{ width: "32rem", height: "18rem" }}
          >
            <Card.Header className="sub-title text-center">
              ColombianDevs | 2022 - Actualidad{" "}
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <h3 className="title-front">Frontend developer</h3>
              <p className="text-center">
                Encargado de la maquetación, creación y desarollo de
                aplicaciones webs en React
              </p>
              <ListGroup horizontal>
                <span className="li-item mx-1">React</span>
                <span className="li-item mx-1">NextJS</span>
                <span className="li-item mx-1">TypeScript</span>
                <span className="li-item mx-1">TailwindCSS</span>
              </ListGroup>
            </Card.Body>
          </Card>
        
      </Row>
    </Container>
  );
};

export default Experience;
