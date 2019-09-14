import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import EpisodeCard from "./components/EpisodeCard";
import EpisodeList from "./components/EpisodeList";

export default function App() {
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <EpisodeCard/>
      <EpisodeList/>
    </main>
  );
}
