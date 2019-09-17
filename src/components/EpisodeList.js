import React,{useEffect, useState} from "react";
import axios from "axios";
// import Axios from "axios";
import EpisodeCard from "./EpisodeCard";

const BASE_URL = "https://rickandmortyapi.com/api/episode/";

function EpisodeList(){
  const [getEpisodes, setGetEpisodes] = useState([{
    id: "",
    name: "",
    air_date: "",
    episode: "", 
    characters: [],
  }])
  
  useEffect(() => {
    axios.get(BASE_URL)
    .then(res => setGetEpisodes(res.data.results))
    .catch(err => console.log(err))
  })
  return(
    <div className="episodelist">
      <h1>EpisodeList</h1>
      {getEpisodes.map((getEpisode) => {
        return (<EpisodeCard 
        getEpisode={getEpisode}
        name={getEpisode.name}
        episode={getEpisode.episode}
        air_date={getEpisode.air_date}
        />)})}
    </div>
  )
}

export default EpisodeList;