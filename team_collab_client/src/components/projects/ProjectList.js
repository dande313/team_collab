import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    const renderProjects = this.props.projects.map(project => 
    <tr key={project.id} className="table-row"  >
      <td> <Link to={`/projects/${project.id}`}><h4 >{project.title}</h4></Link> </td>
      <td> {project.created_at.substring(0, 10)}</td>
      <td> {project.created_at.substring(11, 19)}</td>
      <td> {project.info}</td>
      {project.assistance_needed ? (<td className="flagged-red"> yes </td>) : (<td> no </td>)}
    </tr>
    );

    return (
      <table className="projects-table">
        <tbody>
          <tr className="table-header">
            <th>Project Name</th><th>Date</th><th>Time</th><th>Info</th><th>Assistance needed?</th>
          </tr>
          {renderProjects}
        </tbody>        
      </table>
    )
  }
}

export default ProjectList;