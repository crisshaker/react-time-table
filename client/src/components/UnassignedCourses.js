import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { connect } from "react-redux";
import Course from "./Course";
import * as actions from "../actions";

const CourseTarget = {
  drop({ moveCourseToUnassigned }, monitor) {
    const droppedCourse = monitor.getItem();
    moveCourseToUnassigned({ course: droppedCourse });
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

class UnassignedCourses extends Component {
  constructor(props) {
    super(props);

    this.renderCourses = this.renderCourses.bind(this);
  }

  renderCourses() {
    const { courses } = this.props;

    return courses.filter(course => course.period === null).map(course => (
      <li key={course.id}>
        <Course course={course} />
      </li>
    ));
  }

  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <ul className="courses">{this.renderCourses()}</ul>
    );
  }
}

export default connect(null, actions)(
  DropTarget("course", CourseTarget, collect)(UnassignedCourses)
);
