import React from "react";
import "./UserDetails.css";

const UserDetails = ({ character }) => {
  return (
    <div className="detall">
      <div className="avat">
        <img src={character.image} alt={`avatar de ${character.name}`} />
      </div>
      <div className="text">
        <h2>{character.name}</h2>
        <h3>Status: {character.status}</h3>
        <p>Specie: {character.species}</p>
        {character.type && <p>Type: {character.type}</p>}
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default UserDetails;