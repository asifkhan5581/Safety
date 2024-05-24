import React, { useState } from "react";
import SidebarImage from "../../Images/SideImage.jpg";
import "./hero.css";
function Sidebar() {
  const [dropmenu, setdropmenu] = useState(false);
  const [dropmenu2, setdropmenu2] = useState(false);
  const [dropmenu3, setdropmenu3] = useState(false);
  const [dropmenu4, setdropmenu4] = useState(false);
  const [dropmenu5, setdropmenu5] = useState(false);
  const [dropmenu6, setdropmenu6] = useState(false);
  const rightArrow = <i class="fa-solid fa-chevron-right"></i>;
  return (
    <>
      <div class="card">
        <img src={SidebarImage} class="card-img-top" alt="..." />

        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu(!dropmenu)}>
              Brand{" "}
              <span>
                {dropmenu ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu ? "drop-menu drop-show" : "drop-menu"}>
              <li>
                <a href="#">Brand 1</a>
              </li>
              <li>
                <a href="#">Brand 2</a>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu2(!dropmenu2)}>
              Average Rating{" "}
              <span>
                {dropmenu2 ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu2 ? "drop-menu2 drop-show" : "drop-menu2"}>
              <li>
                <a href="#"> Average Rating 1</a>
              </li>
              <li>
                <a href="#"> Average Rating 1</a>
              </li>
              <li>
                <a href="#"> Average Rating 1</a>
              </li>
              <li>
                <a href="#"> Average Rating 1</a>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu3(!dropmenu3)}>
              Special Mounting Option{" "}
              <span>
                {dropmenu3 ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu3 ? "drop-menu3 drop-show" : "drop-menu3"}>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
              <li>
                <a href="#">Special Mounting Option 1</a>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu4(!dropmenu4)}>
              Safety Standard{" "}
              <span>
                {dropmenu4 ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu4 ? "drop-menu4 drop-show" : "drop-menu4"}>
              <li>
                <a href="#">Safety Standard 2</a>
              </li>
              <li>
                <a href="#">Safety Standard 2</a>
              </li>
              <li>
                <a href="#">Safety Standard 2</a>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu5(!dropmenu5)}>
              Availble Materials{" "}
              <span>
                {dropmenu5 ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu5 ? "drop-menu5 drop-show" : "drop-menu5"}>
              <li>
                <a href="#">Availble Materials</a>
              </li>
              <li>
                <a href="#">Availble Materials</a>
              </li>
            </ul>
          </li>
          <li class="list-group-item">
            <a href="#" onClick={() => setdropmenu6(!dropmenu6)}>
              Availble Materials{" "}
              <span>
                {dropmenu6 ? (
                  <i class="fa-regular fa-circle-xmark"></i>
                ) : (
                  <i class="fa-solid fa-chevron-right"></i>
                )}
              </span>
            </a>
            <ul className={dropmenu6 ? "drop-menu5 drop-show" : "drop-menu5"}>
              <li>
                <a href="#">Availble Materials</a>
              </li>
              <li>
                <a href="#">Availble Materials</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
