import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { BiHappyBeaming } from "@react-icons/all-files/bi/BiHappyBeaming"

const FooterContainer = styled.footer`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin: 12px 0;
  width: 100%;
`

const Name = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
`

export const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} &middot; Create by
      <Name to="https://github.com/maxiCalderonBuono">Maxi Calderón</Name>
      <BiHappyBeaming size={20} />- Enjoy!
    </FooterContainer>
  )
}
