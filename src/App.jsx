import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./componentes/Character";
// import ButtonSection from './componentes/ButtonSection'; 
// import Episode from "./componentes/Episode";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const PaginaRand = Math.floor(Math.random() * 34) + 1;

    fetch(`https://rickandmortyapi.com/api/character?page=${PaginaRand}`)
      .then((res) => res.json())
      .then((data) => {
        const PersonajeRandom = getPersonajeRandom(data.results, 1);
        setUser(PersonajeRandom);
      });
  }, []);

  const getPersonajeRandom = (userArray, count) => {
    const mezcla = userArray.sort(() => 0.5 - Math.random());
    return mezcla.slice(0, count);
  };

  return (
    <div className="App">
      {user.map((character) => (
        <div key={character.id}>
          <Character character={character} />
        </div>
      ))}
    </div>
  );
}

export default App;
