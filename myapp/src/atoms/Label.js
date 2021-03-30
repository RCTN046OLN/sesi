import React, { Component } from "react";
import PropTypes from "prop-types";

class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span style={{ color: this.props.color }}>{this.props.title}</span>;
  }
}

Label.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Label;
