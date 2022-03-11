import React from "react";
import { Button } from "reactstrap";

const HeaderButtons = () => {
  return (
    <div className="header-btn">
      <Button color="danger" className="btn-order">
        Order Now
      </Button>{" "}
      <Button color="success" className="btn-bill">
        Pay Bill
      </Button>{" "}
      <Button outline color="success" className="btn-started">
        Get Started
      </Button>
    </div>
  );
};

export default HeaderButtons;
