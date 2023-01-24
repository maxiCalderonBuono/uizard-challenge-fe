import { compareDesc } from "date-fns"
import React, { useState } from "react"
import { useNewsInfo } from "../../hooks"
import { PostScreen } from "./PostScreen"
import { Sidebar } from "./Sidebar"

export const NewsScreen = () => {
  const [post, setPost] = useState("")

  const news = useNewsInfo()

  const [filteredData] = news.filter(news => news.id === post)

  return (
    <>
      <Sidebar news={news} setPost={setPost} />

      <PostScreen filteredData={filteredData} />
    </>
  )
}
