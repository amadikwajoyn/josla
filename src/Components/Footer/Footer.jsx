import React from 'react'
import {Container, Row, Col} from 'reactstrap'
// import smartmeter from '../../assets/image/smartMeterImage_385bc167.png';
import './Footer.css'

function Footer() {
  return (
          <Row className="footerrow-box">
            <Row>
                <Col md={12} lg={12} className="footer-title">
                        <hr />
                </Col>
            </Row>
              <Col md={12} lg={2}>
                  <h3>Josla Electric</h3>
              </Col>

              <Col md={12} lg={3}>
                    <h3>Product & Services</h3>
                    <p>Smart Meter </p>
                    <p>Bill Payment </p>
                    <p>Fault Reporting </p>
                    <p>Online Store</p>
              </Col>

              <Col md={12} lg={2}>
                  <h3>About Us</h3>
                  <p>Contact Form </p>
                  <p>Career </p>
                  <p>Get Newsletter </p>
                  <p>Read Blog</p>
              </Col>

              <Col md={12} lg={2}>
                  <h3>info</h3>
                  <p>Privacy Policy </p>
                  <p>Terms of Use </p>
                  <p>Refund Policy </p>
                  <p>Legal </p>
                  <p>FAQ </p>
              </Col>
              
              <Col md={12} lg={3}>
                  <h3>Contact</h3>
                  <p>+234 (0) 8087488793 </p>
                  <p>corporate@josla.com.ng</p>
              </Col>
            <Row>
                <Col md={12} lg={12} className="footer-title">
                        <hr />
                </Col>
            </Row>
          </Row>
  )
}

export default Footer