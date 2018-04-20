import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Course from "./Course";

const courseTarget = {
  drop(props, monitor) {
    console.log(monitor.getItem());
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

export default DropTarget("course", courseTarget, collect)(TableCell);
