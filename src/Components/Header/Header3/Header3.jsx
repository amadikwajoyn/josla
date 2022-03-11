import React from "react";
import electricCharger from '../../../assets/image/electricCharge_0df93834.png';
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header3.css";
function Header3() {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col>
            <Row className="header-box">
              <Col xs="12" lg="6" sm="12" className="header-text">
                <h1 className="header-title">Save Energy <br />with our <br />Smart Meter</h1>
                <p className="header-p">
                  With our Smart Meter, we want to contribute as a local company
                  that leverages information technology to match supply and
                  demand of electricity in real-time.
                </p>
              </Col>

              <Col xs="12" lg="6" sm="12" className="header-img">
                <img src={electricCharger} alt="Smart Grid" width="80%" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header3;
