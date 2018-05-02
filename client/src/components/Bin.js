import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import bin from "../img/bin.svg";
import * as actions from "../actions";

const CourseTarget = {
  drop({ removeCourse }, monitor) {
    const droppedCourse = monitor.getItem();

    removeCourse({ course: droppedCourse });
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

class Bin extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="bin">
        <img src={bin} alt="Delete" title="Delete" />
      </div>
    );
  }
}

export default connect(null, actions)(
  DropTarget("course", CourseTarget, collect)(Bin)
);
