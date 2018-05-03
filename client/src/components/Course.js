import React, { Component } from "react";
import { DragSource } from "react-dnd";

const courseSource = {
  beginDrag({ course }) {
    return { id: course._id };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource()
  };
};

class Course extends Component {
  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <p>{this.props.course.code}</p>
      </div>
    );
  }
}

export default DragSource("course", courseSource, collect)(Course);
