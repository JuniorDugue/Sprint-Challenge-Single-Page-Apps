import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import LocationCard from "./LocationCard";
import EpisodeCard from "./EpisodeCard";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return(
    <StyledNav>
      <NavLink exact to = "/">Home Page</NavLink>
      <NavLink to = "/character">Characters</NavLink>
      <NavLink to = "/location">Locations</NavLink>
      <NavLink to = "/episode">Episodes</NavLink>

      <Route path="/" exact render/>
      <Route path="/character" exact render={(props) => <CharacterCard {...props} />}/>
      <Route path="/location" exact render={(props) => <LocationCard {...props} />}/>
      <Route path="/episode" exact render={(props) => <EpisodeCard {...props} />}/>
    </StyledNav>
    )
};

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    padding: 10px;
    margin: 10px 0;
  }
`;