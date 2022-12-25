import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faMessage} from "@fortawesome/free-regular-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const SocialIconStyle = styled.div`
  a {
    margin: 0px 10px 0px 0px;
  }
`

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            email
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <SocialIconStyle>
      <a href={`https://github.com/${social?.github || ``}`}>
        <FontAwesomeIcon icon={faGithub} size="lg" color="#6E7B85" />
      </a>
      <a href={`https://twitter.com/${social?.twitter || ``}`}>
        <FontAwesomeIcon icon={faTwitter} size="lg" color="#6E7B85" />
      </a>
      <a href={`mailto:${social?.email || ``}`}>
        <FontAwesomeIcon icon={faMessage} size="lg" color="#6E7B85" />
      </a>
    </SocialIconStyle>
  )
}

export default Social;
