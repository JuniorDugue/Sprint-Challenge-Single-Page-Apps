import React from "react";

function EpisodeCard(props){
  return(
    <div className="episodecard">
      <h1>EpisodeCard</h1>
      <p>{props.getEpisode.name}</p>
      <p>{props.getEpisode.episode}</p>
      <p>{props.getEpisode.air_date}</p>
    </div>
  )
}

export default EpisodeCard;