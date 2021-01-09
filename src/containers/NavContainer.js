import React from 'react';
import { NavLink } from 'react-router-dom';

const NavContainer = () => (
  <nav className="navbar p-3 d-flex flex-row justify-content-between">
    <NavLink to="/" className="navbar-brand brand-font">Globe Ranger</NavLink>
  </nav>
);

export default NavContainer;
