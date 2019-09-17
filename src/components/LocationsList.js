import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Item } from "semantic-ui-react";

const BASE_URL = "https://rickandmortyapi.com/api/location/";

export default function LocationsList() {

  const [getLocations, setGetLocations] = useState([{
    dimension: "",
    id: "",
    name: "",
    type: "",
    residents: "", 
 }]);

console.log(getLocations, 'getLocations')

useEffect(() => {
  axios.get(BASE_URL)
    .then(res => setGetLocations(res.data.results))
    .catch(err => console.log(err))
  }, []);

  return(
    <section className="locations-list grid-view">
      {getLocations.map((getLocation) => {
        return (<LocationCard key={i} 
        getLocation={getLocation}
        name={getLocation.name}
        dimension={getLocation.dimension}
        type={getLocation.type}
        residents={getLocation.residents}
         />) })}
    </section>
  );
}

