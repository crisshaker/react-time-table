import React, { Component } from "react";
import { DragSource } from "react-dnd";

const courseSource = {
  beginDrag(props) {
    console.log(props.course);
    return props.course;
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
