import React from "react"
import styled from "styled-components"
import { FaRegNewspaper } from "@react-icons/all-files/fa/FaRegNewspaper"
import { TimeAgo } from "./TimeAgo"
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight"

const PostContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
  border-radius: 4px;
  background-color: #a0aec0;
  color: #2e3039;
  width: 300px;
  padding: 12px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-center: end;
  gap: 6px;
  max-width: 290px;
`

const Text = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #1f2028;
  font-weight: bold;
`

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Button = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 16px 0 0 0;
`

export const PostExcerpt = ({ news, setPost }) => {
  const { id, author, date, title, url } = news

  const handleOnClick = () => {
    setPost(id)
  }

  return (
    <PostContainer title={title} onClick={handleOnClick}>
      <Header>
        <FaRegNewspaper size={32} />
        <Text>{title}</Text>
      </Header>
      <About>
        <p>
          <Text>Author: </Text>
          {author}
        </p>
        <p>
          <Text>Wrote: </Text>
          <TimeAgo timeStamp={date} />
        </p>
        <Button>
          Read More <AiOutlineArrowRight />
        </Button>
      </About>
    </PostContainer>
  )
}
