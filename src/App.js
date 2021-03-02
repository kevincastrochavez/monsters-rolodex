import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frankestein",
          id: "asdasddv",
        },
        {
          name: "Dracula",
          id: "sgsdfg",
        },
        {
          name: "Zombie",
          id: "srbdfvg",
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
