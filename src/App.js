import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
// import EpisodeCard from "./components/EpisodeCard";
// import EpisodeList from "./components/EpisodeList";
// import CharacterList from "./components/CharacterList";
// import LocationsList from "./components/LocationsList"
// import {Route} from "react-router-dom";
// import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      {/* <Route exact path="/characterList" component={CharacterList}/> */}
      {/* <EpisodeCard/> */}
      {/* <EpisodeList/> */}
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
    </main>
  );
}
