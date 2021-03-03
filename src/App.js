import React, { Component } from "react";
import CardList from "./components/card-list/CardList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="app">
        <input
          onChange={(e) => this.setState({ searchField: e.target.value })}
          type="search"
          placeholder="Search Monsters"
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
