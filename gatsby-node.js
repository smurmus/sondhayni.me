
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type ProjectsJson implements Node @dontInfer {
      path: String!
      header: String!
      title: String!
      subheader: String!
      imgPath: String!
    }
  `
  createTypes(typeDefs)
}

const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const projectTemplate = path.resolve(`src/templates/projectTemplate.js`)
  const workTemplate = path.resolve(`src/templates/workTemplate.js`)

  const result = await graphql(`
    {
      blogPosts: allMarkdownRemark(
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
      allProjects: allProjectsJson {
        edges {
          node {
            path
          }
        }
      }
      portfolioItems: allMdx {
        edges {
          node {
            frontmatter {
              path
              imagePath
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

  result.data.blogPosts.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  });

  result.data.allProjects.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.path}`,
      component: projectTemplate,
      context: {
        projectPath: node.path,
      }
    })
  });

  result.data.portfolioItems.edges.forEach(({ node }) => {
    createPage({
      path: `/work/${node.frontmatter.path}`,
      component: workTemplate,
      context: {
        projectPath: node.frontmatter.path,
        imagePath: node.frontmatter.imagePath
      }
    })
  });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
  })
}

// this was in actions webpack configb4:
// module: {
//   rules: [
//     {
//       test: /bad-module/,
//       use: loaders.null(),
//     },
//   ],
// },
