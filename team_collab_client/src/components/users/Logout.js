import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../../redux/actions/logout'

class Logout extends Component {

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <h2>Hey bud, sure ya wanna logout?</h2>
        <h3>But this app is lager than life!</h3>
        <h4>That's ok, ale see you later.</h4>
        <p>Tap This ;)</p>
        <button onClick={this.handleOnSubmit}>Yes, I'm sick of your puns and I want to leave.</button>
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)