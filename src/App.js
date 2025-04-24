import './App.css';
import Filter from './Filter/Filter';
import Cards from './Cards/Cards';
import { useState } from 'react';

function App() {

  const [filterCharacter,setFilteredCharacter] = useState("");

  const filterByCharacter = (character) => {
    setFilteredCharacter(character);
  }
  return (
    <div className="App">
     <Filter filterCharacter={filterCharacter} filterByCharacter={filterByCharacter} />
     <Cards filterCharacter={filterCharacter}/>
    </div>
  );
}

export default App;
