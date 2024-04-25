import React from "react";
import "./Info.css";

const Info = ({ character }) => {
  return (

    <div className="detalles">
      <div className="avatar">
         <img src={character.image} alt={`avatar de ${character.name}`} />
         </div>
         <div className="texto">
          <h2>{character.name}</h2>
         <h3>Status: {character.status}</h3>
         <p>Specie: {character.species}</p>
         {character.type && <p>Type: {character.type}</p>}
      </div>
    </div>
  );
};

export default Info;