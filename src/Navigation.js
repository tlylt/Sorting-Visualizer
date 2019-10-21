import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar bg-info navbar-dark">
        <a className="navbar-brand" href="/">
          Sorting Visualizer
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
