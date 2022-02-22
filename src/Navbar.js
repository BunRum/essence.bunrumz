import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElem";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Games" activeStyle>
            Games
          </NavLink>
          <NavLink to="/Player" activeStyle>
            Player
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};