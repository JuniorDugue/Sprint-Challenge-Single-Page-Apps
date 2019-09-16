import React from "react";

export default function CharacterCard(props) {
  console.log(props, "card")
  // return <span>todo: character</span>;
  return(
    <div>
      <h3>{props.getCharacter.name}</h3>
      <img src={props.getCharacter.image} alt={props.getCharacter.name} />
      <p>Status: {props.getCharacter.status}</p>
      <p>Origin: {props.getCharacter.origin.name}</p>
      <p>Species: {props.getCharacter.species}</p>
    </div>   
  )
}
