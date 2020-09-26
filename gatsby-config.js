require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `nicholasduffy.com`,
    siteTitle: `Nicholas Duffy`,
    siteUrl: `https://nicholasduffy.com`,
    siteHeadline: `Blog`,
    siteDescription: `I write about Node.js, Go, Python, infrastructure, and data.`,
    author: `@duffn`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `YYYY-MM-DD`,
        feedTitle: `nicholasduffy.com`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog/`,
          },
          {
            title: `About`,
            slug: `/about/`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/duffn`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/duffn`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nicholasduffy.com`,
        short_name: `nicholasduffy.com`,
        description: `I write about Node.js, Go, Python, infrastructure, and data.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
