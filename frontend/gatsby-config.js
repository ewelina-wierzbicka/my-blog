require("dotenv").config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: "My-blog",
    description: "",
    author: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: ["article", "email"],
        queryLimit: 1000,
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Montserrat:400", "Antonio: 400"],
        display: "swap",
        include: "/images",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
