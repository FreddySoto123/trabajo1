import React from "react";
import UserDetails from "./UserDetails";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ character }) => {
    console.log(character);
    return (

        <NavLink to={`/character?id=${character.id}`}>
            <div className="flujo">
            <div className="contened">
                <UserDetails character={character} />
            </div>
            </div>
        </NavLink>
    );
};

export default Card;