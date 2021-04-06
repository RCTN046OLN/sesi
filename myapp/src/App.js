import { Component } from "react";
import Counter from "./components/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import User from "./components/User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isCounter: false };
  }

  // componentWillMount() {
  //   console.log("componentWillMount", "<<<<<<");
  // }

  // componentDidMount() {
  //   console.log("componentDidMount", "<<<<<<<<");
  // }

  // shouldComponentUpdate() {
  //   console.log("shouldComponentUpdate", "<<<<<");
  // }

  // componentWillUpdate(nextProps, nextState) {
  // console.log("componentWillUpdate", "<<<<<<");
  // console.log(nextState, "nextState");
  // console.log(this.state, "currnetState");
  // }

  // componentDidUpdate(prevProps, prevState) {
  // console.log("componentDidUpdate", "<<<<<");
  // console.log(prevState, "prevState");
  // console.log(this.state, "currnetState");
  // }

  handleToggleCounter() {
    this.setState({
      isCounter: !this.state.isCounter,
    });
  }

  render() {
    return (
      <div>
        <h1> App</h1>
        <button onClick={() => this.handleToggleCounter()}>
          Toggle Counter
        </button>
        <ErrorBoundary>
          {this.state.isCounter && <Counter />}
          <hr />
          <User />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
