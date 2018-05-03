import React, { Component } from "react";
import { connect } from "react-redux";
import TableCell from "./TableCell";

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.renderTableCells = this.renderTableCells.bind(this);
  }

  renderTableCells() {
    const TIMES = [
      "730",
      "830",
      "930",
      "1030",
      "1130",
      "1230",
      "1330",
      "1430",
      "1530",
      "1630",
      "1730",
      "1830"
    ];

    const { courses, venue } = this.props;

    return TIMES.map(time => {
      const course = courses.find(course => course.period.time === time);
      return (
        <TableCell
          time={time}
          course={course}
          venue={venue}
          key={Date.now() * Math.random() * Math.random()}
        />
      );
    });
  }

  render() {
    const { venue } = this.props;

    return (
      <tr>
        <td>{venue.name}</td>
        {this.renderTableCells()}
      </tr>
    );
  }
}

const mapStateToProps = ({ courses }, ownProps) => {
  return {
    courses: courses.filter(
      course =>
        course.period !== null && course.period.venue === ownProps.venue._id
    )
  };
};

export default connect(mapStateToProps)(TableRow);
