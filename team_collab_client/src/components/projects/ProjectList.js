import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    const renderProjects = this.props.projects.map(project =>
      <Link to={`/projects/${this.props.project.id}`} className="project-thumbnail"><h4 >{this.props.project.title}</h4></Link>
    );

    return (
      <div>
        {renderProjects}
      </div>
    )
  }
}

export default ProjectList;