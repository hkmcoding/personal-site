/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Social from './social'
import './layout.css'
import './footer.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100vw`,
          height: `auto`,
          minHeight: '90vh'
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            position: `absolute`,
            display: `block`,
            height: `5vh`,
            color: `#B8B8B8`
          }}
        >
          <div className={`footer`}>
            © {new Date().getFullYear()} Humza Mujib
            <div className={`footerSocialIcons`}>
              <Social />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
