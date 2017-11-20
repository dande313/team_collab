import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    const renderProjects = this.props.projects.map(project => 
    <tr>
      <td> <Link to={`/projects/${project.id}`} key={project.id} className="project-thumbnail"><h4 >{project.title}</h4></Link> </td>
      <td> {project.created_at.substring(0, 10)}</td>
      <td> {project.created_at.substring(11, 19)}</td>
      {project.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
    </tr>
    );

    return (
      <table className="projects-table">
        <tr>
          <th>Project Name</th><th>Date</th><th>Time</th><th>Assistance needed?</th>
        </tr>
        <tbody>
          {renderProjects}
        </tbody>
      </table>
    )
  }
}

export default ProjectList;