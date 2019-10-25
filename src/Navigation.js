import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
        <a className="navbar-brand" href="/">
          Sorting Visualizer
        </a>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Merge Sort
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Bubble Sort
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
