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

  return allFirstNews.nodes
}
