import React from "react";

export default function LocationCard(props) {
  // return <span>todo: location</span>;
  return(
    <div>
      <h3>{props.getLocation.name}</h3>
      <p>Dimension: {props.getLocation.dimension}</p>
      <p>Type: {props.getLocation.type}</p>
      <p>Residents: {props.getLocation.type}</p>
    </div>
  )
}
