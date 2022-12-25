/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `blog.shinyakato.dev 🚀`,
    author: {
      name: `Shinya Kato / 加藤 真也`,
      summary: `29歳。フリーランス開発者、OSS開発者。旅行家であり、愛犬家。13歳からプログラミングを始め、数多くの言語やフレームワークを使用した開発を経験し、国内大手の様々な基幹システムの開発に関わる。また、twitter_api_v2、mastodon_api、その他多くのDart/Flutterライブラリの作者として国内外の開発者に広く知られており、日本人として初めてTwitterJPの公式スペースにメインスピーカーとして招待された経歴を持つ。`,
    },
    description: `私（加藤 真也）が興味のあるプログラミング関連の技術やライブラリの使い方などを書いていくブログです。主な話題はDartとFlutterになりますが、ジャンルを問わずに書いていく方針です。`,
    siteUrl: `https://blog.shinyakato.dev/`,
    social: {
      twitter: `realshinyakato`,
      github: `myConsciousness`,
      email: `contact@shinyakato.dev`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          "gatsby-remark-code-titles",
          {
            resolve: "gatsby-remark-code-buttons",
            options: {
              toasterText: 'Copied'
            }
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                `gatsby-remark-prismjs-title`,
                `gatsby-remark-prismjs`,
              ]
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "blog.shinyakato.dev's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog.shinyakato.dev 🚀`,
        short_name: `blog.shinyakato.dev`,
        start_url: `/`,
        background_color: `#edf2f7`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
