import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import "./TabsComp.css";
import lightabout from './../../assets/image/light.87591fdb.svg';
import AppFeatures from "../AppFeatures/AppFeatures";
import AppFeaturesPersonal from "../AppFeaturesPersonal/AppFeaturesPersonal";

const TabsComp = (props) => {
  const [state, setState] = React.useState({
    activeTab: "1",
  });

  const toggle = (tab) => {
    if (state.activeTab !== tab) {
      setState({
        activeTab: tab,
      });
    }
  };

  return (
      <div className="featurediv">
        <Row>
            <Col md={12} lg={12} className="aboutusland-title">
                    <h4> <img src={lightabout} alt="light" /> Feature App <img src={lightabout} alt="light" /></h4>
            </Col> 
        </Row>
        <Nav tabs className="justify-center tabsnav">
          <Row className="tabscomp">
            <Col sm={6} lg={6} md={6}>
              <NavItem>
                <div
                  className={classnames({
                    active: state.activeTab === "1",
                    individuallink: true
                  })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  Personal
                </div>
              </NavItem>
            </Col>
            <Col sm={6} lg={6} md={6}>
              <NavItem>
                <div
                  className={classnames({
                    active: state.activeTab === "2",
                    individuallink: true
                  })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  Enterprise
                </div>
              </NavItem>
            </Col>
          </Row>
        </Nav>
        <TabContent activeTab={state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4 className="individual-text">
                  For individuals who want to become more energy conscious, you
                  can pay a monthly subscription fee of ₦995 per month to access
                  the following features to drive for efficient behaviours.
                </h4>
              </Col>
            </Row>
            <AppFeaturesPersonal />
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4 className="facility-text">
                  For facility managers, estate developers and independent power
                  providers, you can opt for commission charge on energy
                  delivered or an annual license fee to gain administrative
                  access to their consumer information and advanced features for
                  operational insight
                </h4>
              </Col>
            </Row>
            <AppFeatures />
          </TabPane>
        </TabContent>
      </div>
  );
};

export default TabsComp;
