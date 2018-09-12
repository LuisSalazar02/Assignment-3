import React, { Component } from "react";
import { projectData } from "../data/datasource";
import Project from "./Project";

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()


 */

class FilterProjects extends Component {
  state = {
    filter: "all"
  };

  all = () => {
    this.setState({
      filter: "all"
    });
  };

  solo = () => {
    this.setState({
      filter: "solo"
    });
  };

  team = () => {
    this.setState({
      filter: "team"
    });
  };

  render() {
    const projectSelectedClassVal = "project-type--selected";

    let allSelectedRenderedClass = "";
    let soloSelectedRenderedClass = "";
    let teamSelectedRenderedClass = "";

    // change value of 'let' variables based on component state for whether
    //'all', 'team', or 'solo' is selected

    // --

    const project = this.props.projectData.filter(data => {
      if (this.state.filter === "all") {
        allSelectedRenderedClass = projectSelectedClassVal;
        soloSelectedRenderedClass = "";
        teamSelectedRenderedClass = "";
        return data;
      } else if (this.state.filter === "solo") {
        allSelectedRenderedClass = "";
        soloSelectedRenderedClass = projectSelectedClassVal;
        teamSelectedRenderedClass = "";
        return data.solo === true;
      } else {
        allSelectedRenderedClass = "";
        soloSelectedRenderedClass = "";
        teamSelectedRenderedClass = projectSelectedClassVal;
        return data.solo === false;
      }
    });

    /*if (this.state.filter === "all") {
      allSelectedRenderedClass = projectSelectedClassVal;
    } else if (this.state.filter === "solo") {
      soloSelectedRenderedClass = projectSelectedClassVal;
    } else {
      teamSelectedRenderedClass = projectSelectedClassVal;
    }*/

    return (
      <section>
        <h4>Projects</h4>

        <div className="project-types-list">
          <span
            onClick={this.all}
            data-ptype="all"
            className={`project-type project-type--all ${allSelectedRenderedClass}`}
          >
            All
          </span>

          <span
            onClick={this.solo}
            data-ptype="solo"
            className={`project-type project-type--solo ${soloSelectedRenderedClass}`}
          >
            <i className="ion-person" />
            Solo
          </span>

          <span
            onClick={this.team}
            data-ptype="team"
            className={`project-type project-type--team ${teamSelectedRenderedClass}`}
          >
            <i className="ion-person-stalker" />
            Team
          </span>
        </div>

        <div className="projects-list">
          {/* Step (1) --- .map() the projectData to JSX  */}
          {project.map(element => {
            return <Project key={element.projectName} projectData={element} />;
          })}
        </div>
      </section>
    );
  }
}

export default FilterProjects;
