import { graphql, useStaticQuery } from "gatsby";
import * as React from "react"
import styled from "styled-components";

const GithubSponsorButtonStyle = styled.button`
  {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    font-family: var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
  }

  ::-moz-focus-inner {
    border: none;
  }

  /* Overlay */
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transition: opacity 0.2s;
  }

  /* Ripple */
  ::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 32px; /* Safari */
    height: 32px; /* Safari */
    background-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }

  /* Hover, Focus */
  :hover,
  :focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  :hover::before {
    opacity: 0.08;
  }

  :focus::before {
    opacity: 0.24;
  }

  :hover:focus::before {
    opacity: 0.3;
  }

  /* Active */
  button:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  :active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }

  /* Disabled */
  :disabled {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
    background-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);
    box-shadow: none;
    cursor: initial;
  }

  :disabled::before {
    opacity: 0;
  }

  :disabled::after {
    opacity: 0;
  }

`

const GithubSponsorButton = () => {
    const data = useStaticQuery(graphql`
      query GithubSponsorButtonQuery {
        site {
            siteMetadata {
            social {
                github
            }
          }
        }
      }
    `)

    const social = data.site.siteMetadata?.social

    return  (
        <GithubSponsorButtonStyle onClick={() => window.open(`https://github.com/sponsors/${social?.github || ``}`)}>
            GitHubスポンサーになる
        </GithubSponsorButtonStyle>
    )
}

export default GithubSponsorButton;
