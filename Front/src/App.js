import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";

function App () {

  const [characters, setCharacters] = useState([]);

  const URL_BASE = 'http://localhost:3001/rickandmorty'
  
  const onSearch = (character) => {
    fetch(`${URL_BASE}/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
    }
 
  const onClose = (id) => {
    setCharacters(
    characters.filter(character => character.id !== id)
    )
  }

  return (
    <div>
        <Nav onSearch={onSearch}/>
        <h1>Welcome to Rick & Morty's Universe!</h1>
        <Cards
          characters={characters}
          onClose={onClose}
        />
    </div>
  );
}


export default App;
