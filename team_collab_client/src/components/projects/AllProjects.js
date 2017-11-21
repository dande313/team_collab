import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ProjectList from './ProjectList';
import Project from './Project';

const AllProjects = ({ match, projects }) =>
  <div>
    <div className="main">
      <h2>&nbsp;</h2>
      <ProjectList projects={projects} />
      <Route path={`${match.url}/:reportId`} component={Project} />
    </div>
  </div>

const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(AllProjects);