import React from 'react'
import { Button, Row, Col } from 'reactstrap'
import './AppFeatures.css'


export default function AppFeatures() {
  return (
    <div>
        <Row className="appfeatures-row">
            <Col sm={12} md={6} lg={6} className="features-div1">
                <h4> Demand-side management </h4>
                <p>Use data generated from installed smart metersto better understand electric load pattern within your building/estate/ network </p>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Request Demo</Button>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Learn More</Button>
                    </Col>
                </Row>
            </Col>

            <Col sm={12} md={6} lg={6} className="features-div2">
                <h4> Electric Bill Vending </h4>
                <p>Benefit from an end-to-end metering and billing infrastructure to minimize collection losses and maximize revenue</p>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Request Demo</Button>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Learn More</Button>
                    </Col>
                </Row>
            </Col>

            <Col sm={12} md={6} lg={6} className="features-div3">
                <h4> Asset management </h4>
                <p>Empower frontline staff to record faults digitally, view updates on repairsand refer to guidance on what immediate actions to take </p>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Request Demo</Button>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Learn More</Button>
                    </Col>
                </Row>
            </Col>

            <Col sm={12} md={6} lg={6} className="features-div4">
                <h4> Network Automation </h4>
                <p>Gain from greater visibility and automation of your electric networkto improve service reliability, quickly identify faults, protection against harm, etc. from credible local and global vendors with extended warranty</p>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Request Demo</Button>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <Button >Learn More</Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    </div>
  )
}
