import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { NewsExcerpt } from "./NewsExcerpt"

export const NewsList = () => {
  const { allFirstNews } = useStaticQuery(graphql`
    query FirstNewsQuery {
      allFirstNews {
        nodes {
          id
          author
          date
          title
          url
        }
      }
    }
  `)

  const { nodes: news } = allFirstNews

  return (
    <div>
      {news.map(post => {
        return <NewsExcerpt key={post.id} name={post} />
      })}
    </div>
  )
}
