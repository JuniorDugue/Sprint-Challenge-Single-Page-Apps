import React from "react";

function EpisodeCard(props){
  return(
    <div className="episodecard">
      <h1>EpisodeCard</h1>
      <p>{props.name}</p>
      <p>{props.episode}</p>
      <p>{props.air_date}</p>
    </div>
  )
}

export default EpisodeCard;