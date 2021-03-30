import React, { Component } from "react";
import Label from "../atoms/Label";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Label title="QTmu" color="white" />
      </div>
    );
  }
}

export default Title;
