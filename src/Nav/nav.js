import React from "react";
import { NavLink } from "react-router-dom";
import './../style/nav.css';

function Nav() {
  return (
    <div className="topnav">
      <NavLink exact to="/" activeClassName="active">
        Home (Lab1)
      </NavLink>
      <NavLink exact to="/Card" activeClassName="active">
        Card (Lab2)
      </NavLink>
      <NavLink exact to="/List" activeClassName="active">
        List Todo (Lab3)
      </NavLink>
      <NavLink exact to="/Form" activeClassName="active">
        Form (Lab 4)
      </NavLink>
    </div>
  );
}

export default Nav;
