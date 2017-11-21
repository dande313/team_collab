import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AddProject from './components/projects/AddProject';
import NoPermission from './components/users/NoPermission';
import AllProjects from './components/projects/AllProjects';
import Project from './components/projects/Project';
import Login from './components/users/Login';
import Oops from './components/users/Oops';
import Logout from './components/users/Logout';
import NotFound from './components/NotFound';
import Deleted from './components/Deleted';
import Signup from './components/users/Signup';
import Urgent from './components/projects/Urgent';
import Secret from './components/Secret';
import Welcome from './components/Welcome';
import Home from './components/Home';
import { fetchProjects } from './redux/actions/projects'


import './App.css';
class App extends Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    console.log(this.props)
    return (
     <Router>
        <div className="App">
          <div className="header">
          <div className="navbar">
 
            <div className="user-admin">{this.props.isAdmin && "Logged in as Admin"} &nbsp;</div>
              {!this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/login">Log In</NavLink> |
                  <NavLink className="navlink" to="/signup">Sign Up</NavLink>
                </span>
              }
              {this.props.isAuthenticated &&
                <span>
                  <NavLink className="navlink" to="/">Home</NavLink> |
                  <NavLink className="navlink" to="/reports">All Reports</NavLink> |
                  <NavLink className="navlink" to="/urgent">Urgent</NavLink> |
                  <NavLink className="navlink" to="/reports/new">Submit Report</NavLink> |
                  <NavLink className="navlink" to="/logout">Logout</NavLink>
                </span>
              }
            </div>

      
            <h1 className="title">Team Collaberator</h1>
            <p className="catch-phrase">Too Meta (will change)</p>
          </div>
          <div className="wrapper">
          <Switch>
            <Route exact path="/" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/welcome'/>
              ) : (
                <Route component={Home} />
              )
            )}/>
             <Route exact path="/reports" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AllProjects} />
              )
            )}/>
            <Route exact path="/urgent" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={Urgent} />
              )
            )}/>
            <Route exact path="/reports/new" render={() => (
              !this.props.isAuthenticated ? (
                <Redirect to='/oops'/>
              ) : (
                <Route component={AddProject} />
              )
            )}/>
            <Route exact path="/super-secret" render={() => (
              !this.props.isAdmin ? (
                <Redirect to='/NoPermission'/>
              ) : (
                <Route component={Secret} />
              )
            )}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/deleted" component={Deleted} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/NoPermission" component={NoPermission} />
            <Route exact path="/oops" component={Oops} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/reports/:reportId" component={Project} />
            <Route exact path="/signup" component={NotFound} />
          </Switch>
          </div>

          <div className="footer">
            <p>Copyright 2017. All Rights Reserved.</p>
          </div>
        </div>
     </Router>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects,
  isAuthenticated: state.auth.isAuthenticated,
  isAdmin: state.auth.currentUser.admin
})

export default connect(mapStateToProps, { fetchProjects })(App);
