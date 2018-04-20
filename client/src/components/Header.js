import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 id="logo">SmartTable</h1>
        <ul className="main-menu">
          <li>
            <button id="addCourse" type="button">
              Course
            </button>
          </li>
          <li>
            <button id="addVenue" type="button">
              Venue
            </button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
