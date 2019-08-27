/**
 * Project component that will be using props
 * to display multiple projects with project details
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

const Project = props => {
  return (
	<>
  <div className={`container`}>
    <div className={`project-image`}>
      <img src={props.image} />
    </div>
    <div className={`project-details`}>
      <div className={`tech`}>
        {props.tech.map((tech) =>
        	<>
          <div className={`tech-container`}>
            <span className={`${tech} tech-bubbles`} />
            <span className={`tech-used`}>{tech}</span>
          </div>
         </>
        	)}
      </div>
      <div className={`project-description`}>
        <span>{props.description}</span>
      </div>
    </div>
  </div>
	</>
  )
}

export default Project
