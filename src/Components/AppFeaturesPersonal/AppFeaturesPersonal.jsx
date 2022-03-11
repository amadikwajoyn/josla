import React, { useEffect } from "react";
import { Button, Row, Col } from "reactstrap";
import "./AppFeaturesPersonal.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppFeaturesPersonal() {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 1000,
    });
  });

  return (
    <div>
      <Row className="appfeatures-row1">
        <Col
          sm={12}
          md={6}
          lg={6}
          className="features-div11"
          data-aos="fade-right"
        >
          <h4> Demand-side management </h4>
          <p>
            Use data generated from installed smart metersto better understand
            electric load pattern within your building/estate/ network{" "}
          </p>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Button className="appfeaturesbtn1">Request Demo</Button>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Button className="appfeaturesbtnmore1">Learn More &gt;</Button>
            </Col>
          </Row>
        </Col>

        <Col
          data-aos="fade-left"
          sm={12}
          md={6}
          lg={6}
          className="features-div21"
        >
          <h4> Electric Bill Vending </h4>
          <p>
            Benefit from an end-to-end metering and billing infrastructure to
            minimize collection losses and maximize revenue
          </p>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Button className="appfeaturesbtn1">Request Demo</Button>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Button>Learn More &gt; </Button>
            </Col>
          </Row>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={6}
          className="features-div31"
          data-aos="fade-right"
        >
          <h4> Asset management </h4>
          <p>
            Empower frontline staff to record faults digitally, view updates on
            repairsand refer to guidance on what immediate actions to take{" "}
          </p>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Button className="appfeaturesbtn1">Request Demo</Button>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Button>Learn More &gt; </Button>
            </Col>
          </Row>
        </Col>

        <Col
          sm={12}
          md={6}
          lg={6}
          className="features-div41"
          data-aos="fade-left"
        >
          <h4> Network Automation </h4>
          <p>
            Gain from greater visibility and automation of your electric
            networkto improve service reliability, quickly identify faults,
            protection against harm, etc. from credible local and global vendors
            with extended warranty
          </p>
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Button className="appfeaturesbtn1">Request Demo</Button>
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Button>Learn More &gt; </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
