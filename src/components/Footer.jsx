import React from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import { BiHappyHeartEyes } from "@react-icons/all-files/bi/BiHappyHeartEyes"

export const Nav = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const Name = styled(Link)`
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const Footer = () => {
  return <Footer>Hola</Footer>
}
