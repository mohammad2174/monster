import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handlechange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox placeholder="Search s.th" handlechange={this.handlechange} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
