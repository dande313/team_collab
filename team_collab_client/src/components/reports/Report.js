import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteReport } from '../../redux/actions/reports'

class Report extends Component {

  handleOnDelete = () => {
    this.props.deleteReport(this.props.report, this.props.history)
  }


  render() {
    return (
      <div key={this.props.report.id} className="report-box">
        <h2>{this.props.report.title}</h2>
        <p className="description">{this.props.report.info}</p>
        {this.props.report.assistance_needed &&
        	<p className="flagged-red">The report creator has requested assistance</p>
        }
        {this.props.report.repo_url &&
         <div><a className="github_url" target="_blank" href={this.props.report.repo_url}>Link To Respository</a><br/><br/></div>
        }
        {this.props.isAdmin && this.props.report.title !== "Error: does not exist" &&
          <button onClick={this.handleOnDelete}>Delete </button>
        } 
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const report = state.reports.find(report => report.id === parseInt((ownProps.match.params.reportId), 10))
  if (report) {
    return { report, isAdmin: state.auth.currentUser.admin}
  } else {
    return { report: {title: "Error: does not exist"}, isAdmin: state.auth.currentUser.admin}
  }
}

export default connect(mapStateToProps, { deleteReport })(Report);