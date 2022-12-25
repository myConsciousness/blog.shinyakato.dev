import * as React from "react"
import { Link } from "gatsby"
import "../styles/global.css"
import "../fonts/Inter/inter.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © 2022 - {new Date().getFullYear()}, {` `}
        <a href="https://shinyakato.dev">Shinya Kato</a>
        {' '}
        All Rights Reserved.
      </footer>
    </div>
  )
}

export default Layout
