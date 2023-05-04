import './nav.css';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import sweetspotlogo from './images/SweetSpotLogo.png'

// add icons
import { FaHome } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <div className="nav-items">
          {/* <Navbar.Brand><img src={sweetspotlogo} alt="Sweet Spot Logo" className="nav-logo" /></Navbar.Brand> */}
            <NavItem><Link to="/" style={{ color: 'black' }} className="nav-link"><FaHome /></Link></NavItem>
            <NavItem><Link to="weather" style={{ color: 'black' }} className="nav-link"><WiDayCloudy /></Link></NavItem>
            <NavItem><Link to="profile" style={{ color: 'black' }} className="nav-link"><FaRegUserCircle /></Link></NavItem>
            <NavItem><Link to="team" style={{ color: 'black' }} className="nav-link"><FaUsers /></Link></NavItem>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Nav;
