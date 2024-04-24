import React from "react";
import Info from "./Info";
import Episode from "./Episode";
import ButtonSection from "./ButtonSection";
import "./Character.css";
import { NavLink } from "react-router-dom";

const Character = ({ character }) => {
  return (
    <div className="contenedor">
      <Info character={character} />
      <Episode character={character} /> 
      <NavLink to="/">
        <ButtonSection socialLinks={[{ name: 'Home' }]} />
        </NavLink>
       
    </div>
  );
};

export default Character;
