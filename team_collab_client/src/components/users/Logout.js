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
        <button onClick={this.handleOnSubmit}>Log out</button>
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)