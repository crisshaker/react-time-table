import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
