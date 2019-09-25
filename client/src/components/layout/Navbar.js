import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <Link
                to="/"
                style={{
                }}
                className="col btn grey darken-2"
              >
                <a> <i className="material-icons">code</i>HOME</a>
              </Link>
              <Link
                to="/register"
                style={{
                  fontSize: 30
                }}
                className="col btn red accent-2"
              >
                ALL MANGA
              </Link>
              <Link
                to="/register"
                style={{
                  fontSize: 30
                }}
                className="col btn red accent-2"
              >
                LATEST UPDATES
              </Link>
              <Link
                to="/register"
                style={{
                  fontSize: 30
                }}
                className="col btn red accent-2"
              >
                WIKI
              </Link>
            </ul>
          </div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <input id="last_name" type="text" class="validate" />
            <i class="material-icons">search</i>
            <i class="material-icons">close</i>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
