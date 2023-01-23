import React from "react"
import styled from "styled-components"
import { NewsList } from "../features/news/NewsList"

const SidebarContainer = styled.aside`
  background-color: #2e3039;
  border-radius: 10px;
`

export const Sidebar = () => {
  return (
    <SidebarContainer>
      Top news
      <NewsList />
    </SidebarContainer>
  )
}
