import * as React from "react"
import styled from "styled-components"

import { Navbar } from "./Navbar"
import "./layout.css"

import { Footer } from "./Footer"
import { NewsScreen } from "../features/news/NewsScreen"

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Container = styled.div`
  display: grid;
  min-height: calc(100vh - 80px);
  gap: 12px;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: 1fr 3fr;
`

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <NewsScreen />
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
