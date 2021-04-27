import "./App.css";
import ListItem from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <h1>React Testing</h1>
      <ListItem items={["Orange", "Apple", "Pear"]} />
    </div>
  );
}

export default App;
