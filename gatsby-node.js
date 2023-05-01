const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Products {
      allProduct {
        nodes {
          url
          title
        }
      }
    }
  `)

  data.allProduct.nodes.forEach(({ url, title }) => {
    const { createPage } = actions
    createPage({
      path: `/${url}`,
      component: path.resolve("./src/templates/product-item.js"),
      context: { url, title },
    })
  })
}