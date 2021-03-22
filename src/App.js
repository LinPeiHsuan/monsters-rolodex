import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from './cardList/cardList.component';

function App() {
  const [monsters, setMonsters] = useState(['12s']);
  
  useEffect(() => {
      const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const resJson = await response.json();
      console.log('resJson', resJson)
      setMonsters(resJson)
    };
    fetchFunc()
    }, []);

  // const searchFilter = monsters.filter((monster) =>
  //   monster.name.toLowerCase().includes(search   .toLowerCase()))

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monsters-rolodex</h1>
      </header>
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
