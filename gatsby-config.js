module.exports = {
  siteMetadata: {
    title: `Sondhayni's site`,
    description: `An exploration of...identity?`,
    author: `@smurmus`,
    social: {
      twitter: `@sondhayni`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`]
          },
          {
            family: `Karla`,
            variants: [`400`, `700`]
          },
          {
            family: `Imprima`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Lora`,
            variants: [`400`, `700`]
          },
          {
            family: `Rubik`,
            variants: [`300`, `400`, `500`, `700`]
          },
          {
            family: `Abel`,
            variants: [`400`, `700`]
          },
          {
            family: `Muli`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `700`]
          },
          {
            family: `Work Sans`,
            variants: [`300`, `400`, `700`]
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sondhayni-site`,
        short_name: `sondhayni-site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/s-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
