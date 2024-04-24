import React, { useEffect, useState } from "react";
import Card from "./Card";

const Home = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const PaginaRand = Math.floor(Math.random() * 34) + 1;

    fetch(`https://rickandmortyapi.com/api/character/?page=${PaginaRand}`)
      .then((res) => res.json())
      .then((data) => {
        const PersonajeRandom = getPersonajeRandom(data.results, 10);
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
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Home;
