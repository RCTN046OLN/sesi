import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "App", counter: 0, isTodo: false };
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", "<<<<<<<");
  }

  componentDidUpdate() {
    throw new Error("Update error"); // code untuk simulasi error
  }

  handleTambah() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleKurang() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>Ini Counter: {this.state.counter}</p>
        <button onClick={() => this.handleTambah()}>Tambah</button>
        <button onClick={() => this.handleKurang()}>Kurang</button>
      </div>
    );
  }
}

export default Counter;
