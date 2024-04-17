import React from 'react'
import UserDetails from './UserDetails';
import ButtonSection from './ButtonSection';
import "./Card.css";

const card = (props) => {
    const user=props.user
    // console.log(user);
    const socialLinks = user["social-links"] 
  return (
    <div className="contenedor">
        <UserDetails user= {user}/>
        <ButtonSection socialLinks={socialLinks} />
    </div>
  )
}

export default card;