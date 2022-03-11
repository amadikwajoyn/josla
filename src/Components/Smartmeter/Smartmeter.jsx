import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import smartmeter from "../../assets/image/smartMeterImage_385bc167.png";
import "./Smartmeter.css";
import lightabout from './../../assets/image/light.87591fdb.svg';
import singlethree from './../../assets/image/single-phase.a25bbca2.svg'
import battery from './../../assets/image/battery.073158b8.svg'
import detection from './../../assets/image/detection.3f5716ad.svg'
import nokeyboard from './../../assets/image/notepad.75107694.svg'
import simdata from './../../assets/image/sim.a6738986.svg'

function Smartmeter() {
  return (
    <>
      <Row>
        <Col md={12} lg={12} className="smartmeter-title">
          <h4> <img src={lightabout} alt="light" /> Smart Meter <img src={lightabout} alt="light" /></h4>
        </Col>
      </Row>
      <div className="smartmeter-row-box">
        <Container>
          <Row>
            <Col md={12} lg={4}>
              <img src={smartmeter} alt="Smart Meter" width="80%" />
            </Col>
            <Col md={12} lg={8}>
              <hr className="smart-hr"/>
              <h5>peMtr</h5>
              <p>
                Get our <span> Smart meter </span> to help you understand how much <br /> electricity
                you’re using to help cut cost, save time & take <br />control.
              </p>
              <Row>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                <img src={singlethree} alt="Singlw Three" />
                  <p>
                    Single/Three <br />Phase System
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <h5>250/415V</h5>
                  <p>
                     Operating <br />Voltage
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <h5>100A</h5> 
                  <p>
                    Minimum <br />Current Rating
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <img src={battery} alt='Battery' />
                  <p> 
                    Up to 18 hours <br /> backup battery
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <img src={detection} alt='Detection' />
                  <p>
                    By Pass <br />Detection
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <img src={nokeyboard} alt='Nokeyboard' />
                  <p>
                     No Keyboard <br />Interface
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <img src={simdata} alt='Sim Data' />
                  <p>
                    SIM Data <br />Connectivity
                  </p>
                </Col>
                <Col sm={4} md={4} lg={3} className="smart-icon">
                    <h5>6 secs</h5>
                  <p>
                     6 sec Server <br />Communication
                  </p><br />
                </Col>
              </Row>
              <div className="smartmeter-btns">
                <Button color="danger" className="smart-order-btn">
                  Order Now
                </Button>
                <h5>Learn More </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Smartmeter;
