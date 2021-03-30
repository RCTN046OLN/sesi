import React, { Component } from "react";
import UserList from "./UserList";
import Home from "./pages/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      age: 20,
      users: [
        { name: "Udin", age: 20 },
        { name: "Kosasih", age: 27 },
      ],
    };
    // this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      username: "Udin",
    });
  }

  handleLogout() {
    this.setState({
      username: "",
    });
  }

  handleSelectUser(username) {
    alert(username);
  }

  render() {
    return (
      <div>
        {/* lecture */}
        <p> ----- Lecture -----</p>
        <h1>App</h1>
        <p>Username: {this.state.username}</p>
        <p>Age: {this.state.age}</p>
        <button onClick={() => this.handleLogin()}>Login</button>
        <button onClick={() => this.handleLogout()}>Logout</button>
        <hr />
        <UserList
          users={this.state.users}
          onSelect={(name) => this.handleSelectUser(name)}
          title="User List"
        />
        <p> ----- Lecture -----</p>
        {/* Lecture */}
        <br />
        <br />
        {/* example atomic design */}
        <p> ----- example atomic design -----</p>
        <Home />
        <p> ----- example atomic design -----</p>
        {/* example atomic design */}
      </div>
    );
  }
}

export default App;
