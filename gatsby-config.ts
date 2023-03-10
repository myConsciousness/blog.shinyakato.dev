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
    title: `blog.shinyakato.dev ð`,
    author: {
      name: `Shinya Kato / å è¤ çä¹`,
      summary: `29æ­³ãããªã¼ã©ã³ã¹éçºèãOSSéçºèãæè¡å®¶ã§ãããæç¬å®¶ã13æ­³ãããã­ã°ã©ãã³ã°ãå§ããæ°å¤ãã®è¨èªããã¬ã¼ã ã¯ã¼ã¯ãä½¿ç¨ããéçºãçµé¨ããå½åå¤§æã®æ§ããªåºå¹¹ã·ã¹ãã ã®éçºã«é¢ãããã¾ããtwitter_api_v2ãmastodon_apiããã®ä»å¤ãã®Dart/Flutterã©ã¤ãã©ãªã®ä½èã¨ãã¦å½åå¤ã®éçºèã«åºãç¥ããã¦ãããæ¥æ¬äººã¨ãã¦åãã¦TwitterJPã®å¬å¼ã¹ãã¼ã¹ã«ã¡ã¤ã³ã¹ãã¼ã«ã¼ã¨ãã¦æå¾ãããçµæ­´ãæã¤ã`,
    },
    description: `ç§ï¼å è¤ çä¹ï¼ãèå³ã®ãããã­ã°ã©ãã³ã°é¢é£ã®æè¡ãã©ã¤ãã©ãªã®ä½¿ãæ¹ãªã©ãæ¸ãã¦ãããã­ã°ã§ããä¸»ãªè©±é¡ã¯Dartã¨Flutterã«ãªãã¾ãããã¸ã£ã³ã«ãåããã«æ¸ãã¦ããæ¹éã§ãã`,
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
          {
            resolve: "gatsby-remark-external-links",
            options: {
              rel: "noopener noreferrer"
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-twitter`,
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
                  posted_at: node.frontmatter.posted_at,
                  updated_at: node.frontmatter.updated_at,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {posted_at: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    posted_at
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
        name: `blog.shinyakato.dev ð`,
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
