import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router";

export default class Header extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Students</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active">
                <Link
                  to="/"
                >Home</Link>
              </li>
              <li className="">
                <Link
                  to="/create"
                >Create Student</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
