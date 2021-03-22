import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./cardList/cardList.component";
// import SearchBox from './searchBox/searchBox.component';

function App() {
  const [monsters, setMonsters] = useState([""]);

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const resJson = await response.json();
      console.log("resJson", resJson);
      setMonsters(resJson);
    };
    fetchFunc();
    console.log("after fetchFunc");
  }, []);

  const [searchItem, setSearchItem] = useState("");
  console.log("search item", searchItem);

  const [filterResult, setfilterResult] = useState("");
  console.log("filter search", filterResult);

  useEffect(() => {
    if (searchItem) {
      const filteredSearch = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchItem.toLowerCase())
      );
      console.log("search item filtered", filteredSearch);
      setfilterResult(filteredSearch);
    } else {setfilterResult(monsters)}
  }, [searchItem, monsters]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monsters-rolodex</h1>
      </header>
      {/* <SearchBox 
        handleChange={filter}
      /> */}
      <input
        type="search"
        placeholder="search monster"
        // onChange={event => console.log('event', event.target.value)} />
        onChange={(event) => setSearchItem(event.target.value)}
      />
      <CardList monsters={filterResult} />
    </div>
  );
}

export default App;
