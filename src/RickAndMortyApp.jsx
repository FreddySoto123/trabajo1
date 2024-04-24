import React, { useEffect, useState } from "react";
import "./App.css";
import Character from "./componentes/Character";
import { useSearchParams } from "react-router-dom";

function RickAndMortyApp() {
  const [user, setUser] = useState([]);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser([data]); 
        });
    } else {
      const PaginaRand = Math.floor(Math.random() * 34) + 1;

      fetch(`https://rickandmortyapi.com/api/character/?page=${PaginaRand}`)
        .then((res) => res.json())
        .then((data) => {
          const PersonajeRandom = getPersonajeRandom(data.results, 1);
          setUser(PersonajeRandom);
        });
    }
  }, [id]);

  const getPersonajeRandom = (userArray, count) => {
    const mezcla = userArray.sort(() => 0.5 - Math.random());
    return mezcla.slice(0, count);
  };

  return (
    <div className="RickAndMortyApp">
      {user.map((character) => (
        <div key={character.id}>
          <Character character={character} />
        </div>
      ))}
    </div>
  );
}

export default RickAndMortyApp;
