import React from "react";
import "./secondnav.css";
function SecondNav() {
  return (
    <>
      <div className="second-menu">
        <ul className="list-menu">
          <li>
            <a href="#">Prohition</a>
          </li>
          <li>
            <a href="#">Worning</a>
          </li>
          <li>
            <a href="#">Madotray</a>
          </li>
          <li>
            <a href="#">Osha</a>
          </li>
          <li>
            <a href="#">Information</a>
          </li>
        </ul>
        <div className="search">
          <input type="text" name="" id="" placeholder="Search Here" />

          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}

export default SecondNav;
