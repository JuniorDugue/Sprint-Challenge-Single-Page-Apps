import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
  
  // TODO: Add useState to track data from useEffect
  const [getCharacters, setGetCharacters] = useState([{
    id: "",
    name: "",
    image: "",
    status: "", 
    origin: {name: ""},
    species: "",
  }]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    // setIsLoading(true);
      // fetch(BASE_URL)
      // .then(res => {
      //   if (res.ok) {
      //     return res.json();
      //   } else {
      //     throw Error("Error fetching Characters!");
      //   }
      // })
      // .then( res => {
      //   console.log(res)
      //   setGetCharacters(res.data.results)
      // })
      // .then(getCharacters => {
      //   setGetCharacters(getCharacters);
      //   // setIsLoading(false);
      // })
      // .catch(error => {
      //   setError(error);
      // })

      axios.get(BASE_URL)
      .then(res => setGetCharacters(res.data.results))
      .catch(err => console.log(err))
    }, []);

  return (    
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {getCharacters.map(getCharacter => <CharacterCard getCharacter={getCharacter} /> )}
    </section>
  );

  // return { getCharacters, isLoading, error };

}
