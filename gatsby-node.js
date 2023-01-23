const axios = require("axios")
const crypto = require("crypto")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = ({ actions }) => {
  const { createNode } = actions
  return new Promise((resolve, reject) => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(res => {
        res.data.slice(0, 10).map(post => {
          axios
            .get(`https://hacker-news.firebaseio.com/v0/item/${post}.json`)
            .then(({ data }) => {
              const postNode = {
                id: `${data.id}`,
                parent: `__SOURCE__`,
                internal: {
                  type: `FirstNews`,
                },
                author: `${data.by}`,
                date: `${data.time}`,
                title: `${data.title}`,
                url: `${data.url}`,
              }

              const contentDigest = crypto
                .createHash(`md5`)
                .update(JSON.stringify(postNode))
                .digest(`hex`)

              postNode.internal.contentDigest = contentDigest

              createNode(postNode)
            })
        })
        resolve()
      })
  })
}
