import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav-bar" className="Navbar">
      <li>
        <Link to="home">Home</Link>{" "}
      </li>
      <li>
        <Link to="contact">Contact</Link>{" "}
      </li>
      <li>
        <Link to="contact">Contact</Link>{" "}
      </li>
    </div>
  );
}
export default Navbar;
