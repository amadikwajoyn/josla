import React from 'react'
import { Row, Col} from 'reactstrap'
// import smartmeter from '../../assets/image/smartMeterImage_385bc167.png';
import './AboutusLandpage.css'
import lightabout from './../../assets/image/light.87591fdb.svg'
import aboutbulb from '../../assets/image/pre_order1.36fcf0f1.svg'
import aboutsupport from '../../assets/image/aff.d1576f80.svg'


function AboutusLandpage() {
  return (
      <div className="aboutland-wrapper">
        <Row>
            <Col md={12} lg={12} className="aboutusland-title">
                    <h4> <img src={lightabout} alt="light" /> About Us <img src={lightabout} alt="light" /></h4>
            </Col> 
        </Row>
        <Row className="aboutusland-row-box">
            {/* <Container> */}
                <Col md={12} lg={6} className="aboutusland-vision">
                    <img src={aboutbulb} alt='About Bulb light' />
                    <h3 className="aboutusland-h3">Vision</h3>
                    <p className="aboutusland-p">We envision a Nigeria that adopts the concept of the smart grid and
                    want to contribute to this as a local technology company.</p>
                </Col>
                <Col md={12} lg={6} className="aboutusland-who">
                    <h3 className="aboutusland-h3">Who we are?</h3>
                    <p className="aboutusland-p">We are inspired by the works of Steve Jobs and Nikola Tesla to leverage 
                    the use of personal computing to modernise the traditional approach to electricity 
                    as a service. Our mission over the next five (5) years is to become the household brand for 
                    energy-efficiency and make an impact in about one million (1,000,000) households in Nigeria.</p>
                    <img src={aboutsupport} alt="support orgs" /> <br />
                    <a href="http://">Learn More</a>
                </Col>
                {/* </Container> */}
        </Row>
        

      </div>
  )
}

export default AboutusLandpage