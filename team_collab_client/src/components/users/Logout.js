import React, { Component } from 'react';
import { connect } from 'react-redux';
import logout from '../../redux/actions/logout'

class Logout extends Component {

  componentWillMount(){
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default connect(null, { logout })(Logout)