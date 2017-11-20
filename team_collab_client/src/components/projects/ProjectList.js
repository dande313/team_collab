import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    console.log(this.props.projects)
    const renderProjects = this.props.projects.map(project => 
      <Link to={`/projects/${project.id}`} key={project.id} className="project-thumbnail"><h4 >{project.title}</h4></Link>
    );

    return (
      <div>
        {renderProjects}
      </div>
    )
  }
}

export default ProjectList;