import React from "react";
import "../NavBar/NavBar.css";
import Button from "../buttons/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar-container">
      <ul className="NavBar-list">
        <li>
          <Link to='/contact'>
            <Button className="NavBar-btn" children="Contact"></Button>
          </Link>
          
        </li>
        <li>
          <Link to='/about'>
            <Button className="NavBar-btn" children="About"></Button>
          </Link>
        </li>
        <li className="DropDown-wrapper">
          <Link to='/'>
            <Button className="NavBar-btn DropDown" children="Shop"></Button>
          </Link>
          
          <div className="DropDown-container">
            <ul className="DropDown-list">
              <li>
                <Button className={"DropDown-btn"} children={"T-shirt"}></Button>
              </li>
              <li>
                <Button className={"DropDown-btn"} children={"Dress"}></Button>
              </li>
              <li>
                <Button className={"DropDown-btn"} children={"Pants"}></Button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
