import React from "react";
import "./UserDetails.css";

const UserDetails = ({ character }) => 
{
  return (
    <div className="texto">
      <img src={character.image} alt={`avatar de ${character.name}`} />
      <h2>{character.name}</h2>
      <h3>Status: {character.status}</h3>
      <p>Specie: {character.species}</p>
      {character.type && <p>Type: {character.type}</p>}
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default UserDetails;