import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import GithubSponsorButton from "./github-sponsor-button"

const GithubSponsorCardStyle = styled.aside`
  {
    background-color: #E6F2FF;
    padding: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  #lead {
    margin: 10px;
  }

  .description {
    margin: 0px;
  }

  button {
    margin: 30px 0px 0px 0px;
  }
`

const GithubSponsorCard = () => {
  return (
      <GithubSponsorCardStyle>
          <p id="lead"><strong>スポンサーを募集しています</strong></p>
          <p className="description">私のOSS開発を支援してくださるスポンサー様を募集しております。</p>
          <p className="description">GitHubスポンサーで$1からのご支援が可能ですので、以下のリンクからご確認ください。</p>
          <GithubSponsorButton />
      </GithubSponsorCardStyle>
  )
}

export default GithubSponsorCard;
