import styled from "styled-components"
import { Link } from "gatsby"
import { ImNewspaper } from "@react-icons/all-files/im/ImNewspaper"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1rem;
  top: 0;
  z-index: 999;
  backdrop-filter: blur(10px);
`

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(ImNewspaper)`
  margin: 0 0.5rem 0 2rem;
`
