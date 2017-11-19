import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projects';

class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      assistance_needed: false,
      ibu: '',
      description: '',
      github_repo_url: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleRadio = event => {
    const needsAssistance = event.currentTarget.value === "true" ? true: false;
    this.setState({
      assistance_needed: needsAssistance
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createProject(this.state, this.props.history);
    console.log(this.state)
    this.setState({
      title: '',
      assistance_needed: false,
      description: '',
      github_repo_url: ''
    })
  }

  render() {
    return(
      <div>
        <h2>Add Project</h2>

        <form onSubmit={this.handleOnSubmit}>
        <div>
          <label htmlFor="project_title">Project name</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="project_description">Description </label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="project_github_repo_url">Github URL </label>
          <input
            type="url"
            name="github_repo_url"
            value={this.state.github_repo_url}
            onChange={this.handleOnChange}
            />
        </div>

	    <div>
            <label htmlFor="featured">Needs Assistance? </label>
            <input type="radio" name="featured" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="featured" value="false" onClick={this.handleRadio} /> No
	    </div>

        <button>Add project</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    admin: state.auth.currentUser.admin
  }
}

export default connect(mapStateToProps, { createProject })(AddProject);