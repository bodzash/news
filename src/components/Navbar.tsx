import React from "react";
import { Link } from "react-router-dom";
import { ECategories } from "../globals";
import "./Navbar.scss";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <ul className="navbar-list-wrapper">
        <li className="navbar-list-item">
          <Link to="/">All news</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/business">{ECategories.Business}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/entertainment">{ECategories.Entertainment}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/environment">{ECategories.Environment}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/food">{ECategories.Food}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/health">{ECategories.Health}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/politics">{ECategories.Politics}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/technology">{ECategories.Technology}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/top">{ECategories.Top}</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/world">{ECategories.World}</Link>
        </li>
      </ul>
    </nav>
  );
};
