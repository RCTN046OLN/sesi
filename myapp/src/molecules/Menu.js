import React, { Component } from "react";
import PropTypes from "prop-types";
import Label from "../atoms/Label";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "50px" }}>
          <Label title="Create Meetup" color="white" />
        </div>
        <div>
          <Label title="Explore" color="white" />
        </div>
      </div>
    );
  }
}

export default Menu;
