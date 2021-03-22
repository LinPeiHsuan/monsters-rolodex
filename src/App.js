import './App.css';
import React, {useState, useEffect} from 'react';
import CardList from './cardList/cardList.component';
// import SearchBox from './searchBox/searchBox.component';

function App() {
  const [monsters, setMonsters] = useState(['']);
  
  useEffect(() => {
      const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const resJson = await response.json();
      console.log('resJson', resJson)
      setMonsters(resJson)
    };
    fetchFunc()
    console.log('after fetchFunc')
    }, []);
    
    
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
