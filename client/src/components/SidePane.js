import React, { Component } from "react";
import { connect } from "react-redux";
import bin from "../img/bin.svg";
import Course from "./Course";

class SidePane extends Component {
  constructor(props) {
    super(props);

    this.renderCourses = this.renderCourses.bind(this);
  }

  renderCourses() {
    const { courses } = this.props;

    return courses.filter(course => course.period === null).map(course => (
      <li key={course.code}>
        <Course course={course} />
      </li>
    ));
  }

  render() {
    return (
      <div className="side-pane">
        <ul className="courses">{this.renderCourses()}</ul>
        <div className="bin">
          <img src={bin} alt="Delete" title="Delete" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ courses }) => ({ courses });

export default connect(mapStateToProps)(SidePane);
