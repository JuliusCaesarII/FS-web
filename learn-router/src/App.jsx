import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const [characters,setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    
    console.log(data);
    setCharacters(data.results);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1> HOME PAGE </h1>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <img src={character.image}/>
            </div>
        )
      })}
    </div>
  )
}
export default App