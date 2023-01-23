import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Navbar } from "./Navbar"
import "./layout.css"
import { Sidebar } from "./Sidebar"

import { Preview } from "./Preview"
import { Footer } from "./Footer"

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
  max-width: 1000px;
  grid-template-columns: 1fr 3fr;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <Main>
        <Container>
          <Sidebar />
          <Preview />
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
