import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projects';

class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      assistance_needed: false,
      info: '',
      repo_url: ''
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
      info: '',
      repo_url: ''
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
          <label htmlFor="project_description">Info</label>
          <input
            type="text"
            name="info"
            value={this.state.info}
            onChange={this.handleOnChange}
            />
        </div>

        <div>
          <label htmlFor="project_repo_url">Repo URL (optional)</label>
          <input
            type="url"
            name="repo_url"
            value={this.state.repo_url}
            onChange={this.handleOnChange}
            />
        </div>

	    <div>
            <label htmlFor="featured">Needs Assistance? </label>
            <input type="radio" name="featured" value="true" onClick={this.handleRadio} /> Yes
            <input type="radio" name="featured" value="false" onClick={this.handleRadio} /> No
	    </div>

        <button>Submit Report</button>
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