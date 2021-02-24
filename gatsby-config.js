module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // This type will contain remote schema Query type
       //typeName: `WPGraphQL`,
       // This is field under which it's accessible
       //fieldName: `wpgraphql`,
       // Url to query from
        // the only required plugin option for WordPress is the GraphQL url.
        url:
          process.env.WPGRAPHQL_URL ||
          `https://decognizantconsult.com/graphql`,
      },
    },
    /*{
     resolve: `gatsby-source-graphql`,
     options: {
       // This type will contain remote schema Query type
       typeName: `WPGraphQL`,
       // This is field under which it's accessible
       fieldName: `wpgraphql`,
       // Url to query from
       url: process.env.WPGRAPHQL_URL ||
          `https://www.decognizantconsult.com/graphql.`,
     },
   },*/
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
