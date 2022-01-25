import React, { Component } from 'react';
import './SideMenu.css';

export default class SideMenu extends Component {
  render() {
    return (
        <div align="left" className = "Sidenav">
          <nav className= "Navbar">
            <a className="nav-link active" href="#">Doctor</a>
            <a className="nav-link" href="/PMHome">Patient</a>
            <a className="nav-link" href="#">Inventory</a>
            <a className="nav-link" href="#">Room</a>
            <a className="nav-link" href="#">Finance</a>
            <a className="nav-link" href="#">Drugs</a>
            <a className="nav-link" href="#">Medical Records</a>
            <a className="nav-link" href="#">Staff</a>
          </nav>
      </div>
      
    )
  }
}

