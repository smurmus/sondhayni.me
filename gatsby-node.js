/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })
}

 // OTHER ATTEMPTS BELOW
// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const blogPost = path.resolve(`./src/templates/blog-post.js`)
  // const result = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(
  //         sort: { fields: [frontmatter___date], order: DESC }
  //         limit: 1000
  //       ) {
  //         edges {
  //           node {
  //             fields {
  //               slug
  //             }
  //             frontmatter {
  //               title
  //               date
  //               description
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

//   if (result.errors) {
//     throw result.errors
//   }

//   // Create blog posts pages.
//   const posts = result.data.allMarkdownRemark.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: post.node.fields.slug,
//       component: blogPost,
//       context: {
//         slug: post.node.fields.slug,
//         previous,
//         next,
//       },
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
// const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  // const result = await graphql(
  //   `
  //       {
  //         allMarkdownRemark(limit: 1000) {
  //           edges {
  //             node {
  //               frontmatter {
  //                 path
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `
  // )

  // Handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }

  // Create pages for each markdown file.
  // const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  // result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const path = node.frontmatter.path
  //   createPage({
  //     path,
  //     component: blogPostTemplate,
  //     // In your blog post template's graphql query, you can use path
  //     // as a GraphQL variable to query for data from the markdown file.
  //     context: {
  //       path,
  //     },
  //   })
  // })
// }