module.exports = {
  siteMetadata: {
    title: "My Dev Gatsby Blog",
    description: "A blog about front-end web development",
    keywords: [`gatsby`, `theme`, `react`, `blog`],
    author: "Hugonin",
    siteUrl: "https://www.yourdomain.tld",

  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    
    
  ],
};
