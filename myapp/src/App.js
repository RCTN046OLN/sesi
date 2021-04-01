import { Component } from "react";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Home />
      </div>
    );
  }
}

export default App;
