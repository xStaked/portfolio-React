import React from "react";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import "./contact.Styles.scss";
const Contact = () => {
  return (
    <Container className="my-5" id="contact">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <span className="text-center sub-title-contact">Contact</span>
          <h3 className="title-contact">Contacto</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center my-2">
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Dollar amount (with dot and two decimal places)"
            placeholder="xyz@gmail.com"
          />
          <Button className="btn-submit">Enviar</Button>
        </InputGroup>
      </Row>
    </Container>
  );
};

export default Contact;
