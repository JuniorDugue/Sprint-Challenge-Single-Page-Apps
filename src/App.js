import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
// import EpisodeCard from "./components/EpisodeCard";
import EpisodeList from "./components/EpisodeList";
// import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList"
import {Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/" exact render={()=> <WelcomePage/>}/>
      <Route path="/character" component={CharacterList}/>
      <Route path="/location" component={LocationsList}/>
      <Route path="/episode"  component={EpisodeList}/>
      {/* <Route exact path="/characterList" component={CharacterList}/> */}
      {/* <EpisodeCard/> */}
      {/* <EpisodeList/> */}
      {/* <CharacterCard/> */}
      {/* <CharacterList/> */}
      {/* <LocationsList/> */}
    </main>
  );
}
