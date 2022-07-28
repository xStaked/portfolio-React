import { Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./footer.Styles.scss";

function Footer() {
  return (
    <Row>
      <Col className="d-flex flex-row justify-content-center align-items-center">
        <h3 className="mx-2 titles-footer">
          Created By <span className="sergio-footer">Sergio</span>
        </h3>
        <a href="https://github.com/SRomero21" target="_blank" className="mx-1">
          <AiFillGithub className="icon-footer" />
        </a>
        <a
         
          href="https://www.linkedin.com/in/sergio-romero-b40441206/"
          target="_blank"
		  className="mx-1"
        >
          <AiFillLinkedin  className="icon-footer"/>
        </a>
      </Col>
    </Row>
  );
}

export default Footer;
