import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-eka`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-postcss",
    // {
    //   resolve: 'gatsby-plugin-favicons',
    //     options: {
    //     logo: './src/images/favicon.ico',
    //     appName: 'My Website',
    //     background: '#fff',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       yandex: false,
    //       windows: false
    //     }
    //   },
    // }
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "GatsbyJS",
    //     short_name: "GatsbyJS",
    //     start_url: "/",
    //     background_color: "#6b37bf",
    //     theme_color: "#6b37bf",
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: "standalone",
    //     icon: "./src/images/favicon.png", // This path is relative to the root of the site.
    //     // An optional attribute which provides support for CORS check.
    //     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //     // Any invalid keyword or empty string defaults to `anonymous`
    //     crossOrigin: `use-credentials`,
    //   },
    // },
  ],
};

export default config;
