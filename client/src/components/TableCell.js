import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import * as actions from "../actions";
import Course from "./Course";

const courseTarget = {
  drop({ time, venue, moveCourseToCell }, monitor) {
    const droppedCourse = monitor.getItem();
    moveCourseToCell({
      course: droppedCourse,
      target: { time, venue: venue._id }
    });
  },
  canDrop({ course }, monitor) {
    return !course;
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

class TableCell extends Component {
  render() {
    const { course, connectDropTarget } = this.props;

    return course
      ? connectDropTarget(
          <td>
            <div className="table-course">
              <Course course={course} />
            </div>
          </td>
        )
      : connectDropTarget(<td />);
  }
}

export default connect(null, actions)(
  DropTarget("course", courseTarget, collect)(TableCell)
);
