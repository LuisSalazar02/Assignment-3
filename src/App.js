import React, { Component } from "react";

import ShowHideTech from "./components/ShowHideTech";
import FilterProject from "./components/FilterProjects";

class App extends Component {
  render() {
    return (
      <div className="App" id="app-container">
        <ShowHideTech />
        <FilterProject projectData={this.props.projectData} />
      </div>
    );
  }
}

export default App;
