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
  const project = state.projects.find(project => project.id.to_s === ownProps.match.params.projectId.to_s)
  console.log(ownProps.match.params.projectId)
  console.log(state.projects[0].id)
  if (project) {
    return { project }
  } else {
    return { project: {} }
  }
}

export default connect(mapStateToProps, { deleteProject })(Project);