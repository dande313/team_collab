import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../redux/actions/projects'

class Project extends Component {

  handleOnDelete = () => {
    this.props.deleteProject(this.props.project, this.props.history)
  }


  render() {
    return (
      <div key={this.props.project.id} className="project-box">
        <h2>{this.props.project.title}</h2>
        <p className="description">{this.props.project.info}</p>
        {this.props.project.assistance_needed &&
        	<p className="flagged-red">The project creator has requested assistance</p>
        }
        {this.props.project.repo_url &&
         <a className="github_url" href={this.props.project.repo_url}>Link To Respository</a><br/><br/>
        }
        {this.props.isAdmin &&
          <button onClick={this.handleOnDelete}>Delete </button>
        } 
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.id === parseInt((ownProps.match.params.projectId), 10))
  console.log(ownProps.match.params.projectId)
  console.log(project)
  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps, { deleteProject })(Project);