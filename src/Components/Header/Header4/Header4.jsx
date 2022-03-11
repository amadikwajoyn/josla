import React from "react";
import headerImage from '../../../assets/image/headerImage_1aa825a1.png'
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header4.css";
function Header4() {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col>
            <Row className="header-box">
              <Col xs="12" lg="6" sm="12" className="header-text">
                <h1 className="header-title">Electricity <br />as a <br />Service</h1>
                <p className="header-p">
                  With our Smart Meter, we want to contribute as a local company
                  that leverages information technology to match supply and
                  demand of electricity in real-time.
                </p>
              </Col>

              <Col xs="12" lg="6" sm="12" className="header-img">
                <img src={headerImage} alt="Smart Grid" width="80%" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header4;
