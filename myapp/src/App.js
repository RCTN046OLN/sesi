import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Home, Detail, Protected, Login } from "./pages";

const fakeAuth = true;

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/protected"
            render={(renderProps) => {
              console.log(renderProps, "renderProps");
              if (fakeAuth) {
                return <Protected />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
