import React, { Component } from "react";
import Label from "../atoms/Label";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Label color="white" title="Login" />
      </div>
    );
  }
}

export default Login;
