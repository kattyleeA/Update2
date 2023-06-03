import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <li>CompanyLogo</li>
      <div class="header-right">
        <li>
          <Link to="home">Home</Link>{" "}
        </li>
        <li>
          <Link to="contact">Contact</Link>{" "}
        </li>
        <li>
          <Link to="about">About</Link>{" "}
        </li>
      </div>
    </div>
  );
}
export default Header;
