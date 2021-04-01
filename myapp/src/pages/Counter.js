import { Component } from "react";
import CardPerson from "../organisms/CardPerson";
import CardCounter from "../organisms/CardCounter";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        { id: 1, name: "Udin", age: 20 },
        { id: 2, name: "Kosasih", age: 17 },
      ],
      isCouter: true,
    };
  }

  toggleCounter() {
    this.setState({
      isCouter: !this.state.isCouter,
    });
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          {this.state.persons.map((person) => {
            return <CardPerson key={person.id} name={person.name} />;
          })}
        </ul>
        <button onClick={() => this.toggleCounter()}>Toggle Counter</button>
        {this.state.isCouter && <CardCounter />}
        <hr />
      </div>
    );
  }
}

export default Counter;
