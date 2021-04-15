import "./App.css";
import { Counter, Counter2 } from "./pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div style={{ padding: 20 }}>
            <Link to="/">/Counter</Link> <Link to="/counter2">/Counter2</Link>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/counter2" component={Counter2} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
