import React from "react";
import billUser from "../../../assets/image/billUser_e6c6ac90.png";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header1.css";
function Header1() {
  return (
    <div className="header-wrapper">
      <Container>
        <Row>
          <Col>
            <Row className="header-box">
              <Col xs="12" lg="6" sm="12" className="header-text">
                <h1 className="header-title">Pay <br />Electric Bill <br />With Ease</h1>
                <p className="header-p">
                  With our Smart Meter, we want to contribute as a local company
                  that leverages information technology to match supply and
                  demand of electricity in real-time.
                </p>
              </Col>

              <Col xs="12" lg="6" sm="12" className="header-img">
                <img src={billUser} alt="Smart Grid" width="80%" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header1;
