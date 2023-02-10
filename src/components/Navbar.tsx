import React from "react";
import { Link } from "react-router-dom";
import { ECategories } from "../globals";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">All news</Link>
        </li>
        <li>
          <Link to="/business">{ECategories.Business}</Link>
        </li>
        <li>
          <Link to="/entertainment">{ECategories.Entertainment}</Link>
        </li>
        <li>
          <Link to="/environment">{ECategories.Environment}</Link>
        </li>
      </ul>
    </nav>
  );
};
