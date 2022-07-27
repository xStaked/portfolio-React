import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';

import "./Navbar.styles.scss"

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">SR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
            <Nav.Link href="#pricing">Portafolio</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;