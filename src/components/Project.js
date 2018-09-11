import React, { Component } from "react";

/*
  Note : Each <Project/> component will need to receive props from the FilterProjects
         component to write the code to render:

    + the project name inside the <span> ... </span>
    + the appropriate className for a team project or solo project
*/

class Project extends Component {
  render() {
    const theProjectName = this.props.projectData.projectName; // pass projectName value as props

    const soloProjectClassName = "project--solo";
    const teamProjectClassName = "project--team";

    let renderedClassVal;
    // will be conditionally rendered based on `solo` value
    // for project , passed in through props

    if (this.props.projectData.solo === true) {
      renderedClassVal = soloProjectClassName;
    } else {
      renderedClassVal = teamProjectClassName;
    }

    return (
      <div className={`project ${renderedClassVal}`}>
        <span className="project__title">{theProjectName}</span>
      </div>
    );
  }
}

export default Project;
