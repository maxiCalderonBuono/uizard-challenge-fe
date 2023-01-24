import React, { useRef } from "react"
import styled from "styled-components"
import { PostExcerpt } from "./PostExcerpt"

const SidebarContainer = styled.aside`
  background-color: #2e3039;
  border-radius: 10px;
  height: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
`

const Title = styled.p`
  font-weight: bold;
  margin: 20px 0 20px 32px;
  font-size: 1.3rem;
  text-align: start;
  width: 100%;
`

const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const Sidebar = ({ news, setPost }) => {
  const view = useRef(null)

  const scrollToElement = () =>
    view.current.scrollIntoView({ behavior: "smooth", block: "end" })

  return (
    <SidebarContainer>
      <Title ref={view}>Top News</Title>
      <PostsContainer>
        {news.map(post => (
          <PostExcerpt
            key={post.id}
            news={post}
            setPost={setPost}
            scroll={scrollToElement}
          />
        ))}
      </PostsContainer>
    </SidebarContainer>
  )
}
