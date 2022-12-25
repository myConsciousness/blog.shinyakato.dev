/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Social from "./social";

const BioSummaryStyle = styled.div({
  margin: '10px 0px 0px 0px',
});

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
            github
            email
          }
        }
      }
    }
  `)


  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const ProfileStyle = styled.div`
    display: flex;
  `
  return (
    <div className="bio">
      {author?.name && (
        <p>
          <ProfileStyle>
            <StaticImage
              src="../images/me.png"
              alt="Shinya Kato"
              objectFit="cover"
              height={50}
            />
            <div>
              <strong>{author.name}</strong> aka <a href={`https://github.com//${social?.github || ``}`}>myConsciousness</a>
              <Social />
            </div>
          </ProfileStyle>
          <BioSummaryStyle>
            {author?.summary || null}
          </BioSummaryStyle>
        </p>
      )}
    </div>
  )
}

export default Bio
