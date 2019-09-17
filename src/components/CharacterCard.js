import React from "react";

export default function CharacterCard(props) {
  // console.log(props, "card")
  // return <span>todo: character</span>;
  return(
    <div>
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} />
      <p>Status: {props.status}</p>
      <p>Origin: {props.origin}</p>
      <p>Species: {props.species}</p>
    </div>   
  )
}
