import React, { Component } from "react";
import { connect } from "react-redux";
import UnassignedCourses from "./UnassignedCourses";
import Bin from "./Bin";

class SidePane extends Component {
  render() {
    return (
      <div className="side-pane">
        <UnassignedCourses courses={this.props.courses} />
        <Bin />
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps)(SidePane);
