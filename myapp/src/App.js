import "./App.css";
import { Counter, Counter2, Login, User } from "./pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div style={{ padding: 20 }}>
            <Link to="/">/Counter</Link> <Link to="/counter2">/Counter2</Link>{" "}
            <Link to="/user">/User</Link> <Link to="/login">/Login</Link>
          </div>
          <hr />
          <Switch>
            <Route exact path="/" component={Counter} />
            <Route path="/counter2" component={Counter2} />
            <Route path="/user" component={User} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
