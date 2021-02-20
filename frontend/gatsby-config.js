require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
      {
        resolve: 'gatsby-source-strapi',
        options: {
          apiURL: process.env.API_URL || 'http://localhost:1337',
          contentTypes: [
            'article',
            'category'
          ],
          queryLimit: 1000
        }
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            'Montserrat\:400',
          ],
          display: 'swap'
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
