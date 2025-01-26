import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const CharacterPage = () => {
    const { id } = useParams();

    const [characters,setCharacters] = useState([]);
  
    const fetchCharacters = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      
      console.log(data);
      setCharacters(data);
    }
  
    useEffect(() => {
      fetchCharacters();
    }, []);


    return (
        <div>
            <ul>
                <li>{id}</li>
                <li>{characters.name}</li>
                <li>{characters.gender}</li>
                <li>{characters.species}</li>
            </ul>
        </div>
    )
}

export default CharacterPage;