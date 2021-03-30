import React, { Component } from "react";
import Title from "../molecules/Title";
import Menu from "../molecules/Menu";
import Login from "../molecules/Login";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#828282",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Title />
        <Menu />
        <Login />
      </div>
    );
  }
}

export default Header;
