import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand" href="/">
          Sorting Visualizer
        </a>
        <div className="navbar-nav">
          <div className="nav-item mx-auto">
            <a
              className="nav-link "
              href="https://github.com/tlylt/Sorting-Visualizer.git"
            >
              Github Repo
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navigation;
