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
        <li>
          <Link to="/food">{ECategories.Food}</Link>
        </li>
        <li>
          <Link to="/health">{ECategories.Health}</Link>
        </li>
        <li>
          <Link to="/politics">{ECategories.Politics}</Link>
        </li>
        <li>
          <Link to="/technology">{ECategories.Technology}</Link>
        </li>
        <li>
          <Link to="/top">{ECategories.Top}</Link>
        </li>
        <li>
          <Link to="/world">{ECategories.World}</Link>
        </li>
      </ul>
    </nav>
  );
};
