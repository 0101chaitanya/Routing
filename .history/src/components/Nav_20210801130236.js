import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
};
export default Nav;
