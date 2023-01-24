import React, { useState } from "react"
import { useNewsInfo } from "../../hooks"
import { PostScreen } from "./PostScreen"
import { Sidebar } from "./Sidebar"

export const NewsScreen = () => {
  const [post, setPost] = useState("")
  const news = useNewsInfo()

  return (
    <>
      <Sidebar news={news} setPost={setPost} />
      <div>
        <PostScreen news={news} post={post} />
      </div>
    </>
  )
}
