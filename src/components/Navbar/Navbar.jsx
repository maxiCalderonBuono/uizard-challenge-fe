import React from "react"

import { IconContext } from "@react-icons/all-files"
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./index"

export const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            AWSOME NEWS
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}
