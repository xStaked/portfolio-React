import React from "react";
import { Card, Button, Spinner } from "react-bootstrap";

import "./card.Styles.scss";
const CardComponent = ({
  type,
  title,
  description,
  despliegueLink,
  repoLink,
}) => {
  return (
    <Card className="text-center mx-2 my-2" style={{ width: "18rem", height: "20rem" }}>
      <Card.Header className="card-type">{type}</Card.Header>
      <Card.Body>
        <Card.Title className="card-title"> {title} </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button className="btn-card-comp my-2">
          <a href={despliegueLink} target="_blank" className="despliegue">Miralo ¡Aqui! <Spinner animation="grow" size="sm"/> </a>
        </Button>
        <Button className="btn-card-comp">
            <a href={repoLink} target="_blank" className="despliegue">Repositorio ¡Aqui!<Spinner animation="grow" size="sm" className="mx-1"/> </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
