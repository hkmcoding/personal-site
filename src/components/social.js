/**
 * Social media icons that are used in the
 * contact section and the footer
 *
 */

import React from 'react'

import githubLogo from '../images/github-logo.png'
import linkedinLogo from '../images/linkedin-logo.png'
import emailLogo from '../images/internet-symbol.png'

const Social = props => {
  return (
  	<>
    <div className={`socialIcons`}>
      <a href='https://github.com/hmujib' className='social-link'>
        <img src={githubLogo} alt='Github logo' className='logo' />
        <span>{props.github}</span>
      </a>
    </div>
    <div className={`socialIcons`}>
      <a href='https://www.linkedin.com/in/humza-mujib-b14361165/' className='social-link'>
        <img src={linkedinLogo} alt='LinkedIn logo' className='logo' />
        <span>{props.linkedin}</span>
      </a>
    </div>
    <div className={`socialIcons`}>
      <a href='mailto:humzakmujib@gmail.com' className='social-link'>
        <img src={emailLogo} alt='Email logo' className='logo' />
        <span>{props.email}</span>
      </a>
    </div>
   </>
  )
}

export default Social
