import React from "react";

export default function LocationCard(props) {
  // return <span>todo: location</span>;
  return(
    <div>
      <h3>{props.name}</h3>
      <p>Dimension: {props.dimension}</p>
      <p>Type: {props.type}</p>
      <p>Residents: {props.type}</p>
    </div>
  )
}
