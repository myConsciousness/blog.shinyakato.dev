/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";


const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      {author?.name && (
        <p>
          <strong>{author.name}</strong> aka <a href={`https://github.com//${social?.github || ``}`}>myConsciousness</a>
          <div>
            <a href={`https://github.com//${social?.github || ``}`}>
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            {' '}
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
          <div>
            {author?.summary || null}
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
