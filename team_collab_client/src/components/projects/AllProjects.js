import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import project from './Project';

const AllProjects = ({ match, projects }) =>
  <div>
    <h2>All Projects:</h2>
    <div className="main">
      <ProjectList projects={projects} />
      <Route path={`${match.url}/:projectId`} component={project} />
    </div>
  </div>

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(AllProjects);