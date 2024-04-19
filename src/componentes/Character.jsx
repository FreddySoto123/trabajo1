import React from "react";
import Info from "./Info";
import Episode from "./Episode";
import ButtonSection from "./ButtonSection";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <div className="contenedor">
      <Info character={character} />
      <Episode character={character} /> 
      <ButtonSection socialLinks={[{ name: 'Home' }]} /> 
    </div>
  );
};

export default Character;
