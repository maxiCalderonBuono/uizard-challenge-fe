import React from "react"
import styled from "styled-components"
import { NothingSelected } from "./NothingSelected"

const PostScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #2e3039;
  border-radius: 10px;
  height: 100%;
  padding: 12px;
`

const Title = styled.p`
  font-weight: bold;
  padding: 20px 0 20px 32px;
  font-size: 1.3rem;
  text-align: start;
  width: 100%;
`

export const PostScreen = ({ filteredData }) => {
  return (
    <PostScreenContainer>
      <Title>
        {filteredData?.length === 0 || !filteredData
          ? "PostScreen"
          : filteredData.title}
      </Title>

      {filteredData?.length === 0 || !filteredData ? (
        <NothingSelected />
      ) : (
        <iframe
          src={filteredData.url}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="News screen"
        />
      )}
    </PostScreenContainer>
  )
}
