import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>About</li>
        <li>Shop</li>
      </ul>
    </nav>
  );
};
export default Nav;
