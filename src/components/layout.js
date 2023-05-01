import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Container } from "@mui/material"
import Footer from "./footer"

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = site.siteMetadata

  return (
    <div className="wrapper">
      <Header siteTitle={title || `Title`} />
      <main className="main">
        <Container maxWidth="lg">{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
