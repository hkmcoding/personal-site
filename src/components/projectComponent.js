/**
 * Project component that will be using props
 * to display multiple projects with project details
 *
 */

import React from "react";

function generateKey() {
  return Math.random(100)
}

const Project = props => {
  return (
    <>
      <div className={`container`}>
        <div className={`project-image`}>
          <img src={props.image} alt={props.image} />
        </div>
        <div className={`project-details`}>
          <div className={`tech`}>
            {props.tech.map(tech => (
              <React.Fragment key={generateKey()}>
                <div className={`tech-container`}>
                  <span className={`${tech} tech-bubbles`} />
                  <span className={`tech-used`}>{tech}</span>
                </div>
              </React.Fragment>
            ))}
            <span className={`role`}>{props.role}</span>
          </div>
          <div className={`project-description`}>
            <span className={`project-title`}>{props.title}</span>
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
