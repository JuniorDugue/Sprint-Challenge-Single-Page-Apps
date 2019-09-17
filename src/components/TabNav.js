import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import CharacterList from "./CharacterCard";
// import LocationList from "./LocationCard";
// import EpisodeList from "./EpisodeCard";
// import WelcomePage from "./WelcomePage";

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

   
      {/* <Route path="/character" exact render={(props) => <CharacterList {...props} />}/>
      <Route path="/location" exact render={(props) => <LocationList {...props} />}/>
      <Route path="/episode" exact render={(props) => <EpisodeList {...props} />}/> */}
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