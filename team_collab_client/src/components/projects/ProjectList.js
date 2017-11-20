import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    const renderProjects = this.props.projects.map(project => 
    <tr>
      <td> <Link to={`/projects/${project.id}`} key={project.id} className="project-thumbnail"><h4 >{project.title}</h4></Link> </td>
      {project.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
    </tr>
    );

    return (
      <table className="projects-table">
        <tr>
          <th>Project Name</th><th>Assistance needed?</th>
        </tr>
        {renderProjects}
      </table>
    )
  }
}

export default ProjectList;