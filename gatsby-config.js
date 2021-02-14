require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `pipefail.dev`,
    siteTitle: `pipefail`,
    siteUrl: `https://pipefail.dev`,
    siteHeadline: `Blog`,
    siteDescription: `I write about Python, Go, Node.js, cloud infrastructure, and data.`,
    author: `@duffn`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `YYYY-MM-DD`,
        feedTitle: `pipefail.dev`,
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-remove-serviceworker`,
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
