import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default connect(null, actions)(DragDropContext(HTML5Backend)(App));
