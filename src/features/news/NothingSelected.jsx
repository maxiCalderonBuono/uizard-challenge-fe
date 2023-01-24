import React from "react"
import styled from "styled-components"
import { Gi3DGlasses } from "@react-icons/all-files/gi/Gi3DGlasses"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 24px;
`

const Text = styled.p`
  text-align: center;
  font-weight: bold;
`
export const NothingSelected = () => {
  return (
    <Container>
      <Text>
        Discover the latest headlines, pick up a newspaper and read the news.
      </Text>
      <Gi3DGlasses size={64} />
    </Container>
  )
}
