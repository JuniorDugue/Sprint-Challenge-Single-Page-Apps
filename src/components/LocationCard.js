import React from "react";

export default function LocationCard(props) {
  // return <span>todo: location</span>;
  return(
    <div>
      <h3>{props.place.name}</h3>
      <p>Dimension: {props.place.dimension}</p>
      <p>Type: {props.place.type}</p>
      <p>Residents: {props.place.type}</p>
    </div>
  )
}
