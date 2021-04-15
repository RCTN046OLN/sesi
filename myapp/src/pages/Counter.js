import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
} from "../store/actions/counterAction";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(props, "<<<<<< ini props");
  }

  handleInc() {
    // this.props.dispatch(incrementCounter());
    this.props.incrementCounter();
  }

  handleDec() {
    // this.props.dispatch(decrementCounter());
    this.props.decrementCounter();
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>Counter: {this.props.counter}</h2>
        <button onClick={() => this.handleInc()}>+ Inc</button>{" "}
        <button onClick={() => this.handleDec()}>- Dec</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
