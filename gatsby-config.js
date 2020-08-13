module.exports = {
  siteMetadata: {
    title: 'CodeNotes',
    description: `Hi Mohsen save your notes`,
    author: 'Mohsen',
    keywords: ["python", "codenote", "note", "mohsen jalali"]

  },
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        basePath: '/',
        contentPath: 'code-notes',
        gitRepoContentPath:
          'https://github.com/itsmohsenjalali/mohsencodenote/tree/master/code-notes',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: 'https://raw.githubusercontent.com/mrmartineau/gatsby-theme-code-notes/master/assets/logo.png',

        // Opensearch is used to enhance the search on your site.
        // If you want to add it, ensure you set a `siteUrl`
        openSearch: {
          siteUrl: 'codenote.mohsenjalali.ir', // required if you want opensearch
          siteShortName: 'Gatsby Theme Code Notes Example', // override the default value of 'Search`
          siteTags: 'front-end', // optional
          siteDescription: 'A Gatsby theme for storing your code-related notes', // optional
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mohsen Jalali`,
        short_name: `CodeNote`,
        start_url: `/`,
        scope: ".",
        display: "standalone",
        background_color: `#663399`,
        theme_color: `#333333`,
        icon: `logo-site.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
}
