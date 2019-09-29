module.exports = {
  siteMetadata: {
    title: `Semana de informática`,
    description: `A Semana de Informática é uma conferência a decorrer nos dias 28 a 30 de outubro na Faculdade de Engenharia da Universidade do Porto. Entre workshops e competições, palestras e networking, serão 3 dias com atividades variadas que procuram aproximar o mundo empresarial com os futuros profissionais.`,
    author: `NIAEFEUP, https://niaefeup.pt`,
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
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Semana de Informática`,
        short_name: `SINF`,
        start_url: `/`,
        background_color: `#0C0044`,
        theme_color: `#0C0044`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
