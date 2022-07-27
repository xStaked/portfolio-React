import React, { useEffect, useState} from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import "./experience.Styles.scss";
const Experience = () => {

    const [window, setWindow] = useState(true)

    // useEffect(() => {
    //     if( widthWindow < 644){
    //         setWindow = "vertical"
    //     }else {
    //         setWindow = "horizontal"
    //     }
    // },[window])
    

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <span className="sub-title">Experience</span>
          <h3 className="title">Experiencia</h3>
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
            <ListGroup {...window ? "horizontal" :"vertical"}>
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>SASS</ListGroup.Item>
              <ListGroup.Item>WordPress</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
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
                <ListGroup.Item>React</ListGroup.Item>
                <ListGroup.Item>NextJS</ListGroup.Item>
                <ListGroup.Item>TypeScript</ListGroup.Item>
                <ListGroup.Item>TailwindCSS</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        
      </Row>
    </Container>
  );
};

export default Experience;
