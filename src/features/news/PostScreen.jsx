import React from "react"
import styled from "styled-components"

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

export const PostScreen = ({ news, post }) => {
  console.log(post)
  const filteredData = news.filter(draft => (draft.id = post))

  console.log(filteredData.url)
  return (
    <PostScreenContainer>
      <Title>PostScreen</Title>
      <iframe
        src="https://github.blog/changelog/2023-01-23-github-sponsors-will-stop-supporting-paypal/"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </PostScreenContainer>
  )
}
