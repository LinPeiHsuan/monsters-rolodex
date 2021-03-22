import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super(); // super calls constructor method on the Component class

    this.state = {
      monsters: [
        /* // property of the state object
        {name: "Frankenstein",id: "asc1 ",},{name: "Dracula",id: "asr2",}*/
      ],
      searchField: "",
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // componentDidMount is a life cycle method
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Monsters-rolodex </h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
