import { Component } from "react";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    // axios promise
    axios("https://swapi.dev/api/people/")
      .then((data) => {
        this.setState({ users: data.data.results });
      })
      .catch((err) => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });

    // axios async/await on IIFE (Immediately invoked function expression)
    // (async () => {
    //   try {
    //     const { data } = await axios("https://swapi.dev/api/people/");
    //     console.log(data, "<<<<< data axios async");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    // fetch promise
    // contoh fetch pake promise
    // fetch("https://swapi.dev/api/people/")
    //   .then((resp) => {
    //     if (resp.status === 200) {
    //       return resp.json();
    //     }
    //   })
    //   .then((data) => console.log(data, "Dataa fetch"))
    //   .catch((err) => console.log(err));

    // fetch async/await on IIFE (Immediately invoked function expression)
    // contoh fetch pake async/await function
    // (async () => {
    //   try {
    //     const resp = await fetch("https://swapi.dev/api/people/");
    //     const data = await resp.json();
    //     console.log(data, "<<<<<< data fetc async");
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Masih Loading....</h1>;
    }

    if (this.state.error) {
      return <div>Error</div>;
    }

    return (
      <div>
        <h2>User Component</h2>
        <ul>
          {this.state.users.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default User;
