import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../redux/actions/projects'

class Project extends Component {
  handleOnDelete = () => {
    this.props.deleteProject(this.props.project, this.props.history)
  }

  render() {
    return (
      <div key={this.props.project.id}>
        <h2>{this.props.project.title}</h2>
        <p className="description">{this.props.project.description}</p>
        <button onClick={this.handleOnDelete}>Delete </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(project => project.id === ownProps.match.params.projectId)
  if (project) {
    return { project, isAdmin: state.auth.currentUser.admin }
  } else {
    return { project: {}, isAdmin: state.auth.currentUser.admin }
  }
}

export default connect(mapStateToProps, { deleteProject })(Project);