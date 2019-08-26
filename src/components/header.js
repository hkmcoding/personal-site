import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle }) => (
  <header className={`header`}>
    <div className={`left link`}>
      <h1 className={`header-name`}>
        <Link className={`link-text`} to='/'>
          HUMZA MUJIB
        </Link>
      </h1>
    </div>
    <div className={`right link`}>
      <h1 className={`header-link`}>
        <Link className={`link-text light`} to='#'>
          PHOTOS
        </Link>
      </h1>
    </div>
    <div className={`right link`}>
      <h1 className={`header-link`}>
        <Link className={`link-text light`} to='#'>
          PROJECTS
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
