/**
 * Social media icons that are used in the
 * contact section and the footer
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'
import emailLogo from '../images/internet-symbol.png'

const Social = props => {
  return (
  	<>
    <div className={`socialIcons`}>
      <img src={githubLogo} alt='Github logo' class='logo' /> {props.github}
    </div>
    <div className={`socialIcons`}>
      <img src={linkedinLogo} alt='LinkedIn logo' class='logo' /> {props.linkedin}
    </div>
    <div className={`socialIcons`}>
      <img src={emailLogo} alt='Email logo' class='logo' /> {props.email}
    </div>
   </>
  )
}

export default Social
