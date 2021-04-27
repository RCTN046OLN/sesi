import "./App.css";
import ListItem from "./components/ListItems";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>React Testing</h1>
      <ListItem items={["Orange", "Apple", "Pear"]} />
      <Counter />
    </div>
  );
}

export default App;
