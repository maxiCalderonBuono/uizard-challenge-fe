import { compareDesc } from "date-fns"
import { useStaticQuery, graphql } from "gatsby"

export const useNewsInfo = () => {
  const { allFirstNews } = useStaticQuery(graphql`
    query FirstNewsQuery {
      allFirstNews {
        nodes {
          id
          title
          url
          author
          date
        }
      }
    }
  `)

  const sortedData = allFirstNews.nodes.sort((a, b) =>
    compareDesc(Number(a.date), Number(b.date))
  )

  return sortedData
}
