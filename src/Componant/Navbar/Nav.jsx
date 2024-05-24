import React, { useEffect, useState } from "react";
import "./nav.css";
import logo from "../../Images/logo.jpg";
import { Link } from "react-router-dom";
function Nav() {
  const [menu, setmenu] = useState("home");
  const [show, setshow] = useState(false);
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setsticky(true) : setsticky(false);
    });
  }, []);
  return (
    <>
      <div className={`main-nav ${sticky ? "navback" : ""}`}>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul className={show ? "list-item active" : "list-item"}>
            <li className={menu === "home" ? "menu-back" : <></>}>
              <Link to="/home" onClick={() => setmenu("home")}>
                HOME
              </Link>
            </li>
            <li className={menu === "about" ? "menu-back" : <></>}>
              <Link to="/about" onClick={() => setmenu("about")}>
                ABOUT{" "}
              </Link>
            </li>
            <li className={menu === "work" ? "menu-back" : <></>}>
              <Link to="/ourwork" onClick={() => setmenu("work")}>
                OUR WORKS{" "}
              </Link>
            </li>
            <li className={menu === "shop" ? "menu-back" : <></>}>
              <Link to="/shop" onClick={() => setmenu("shop")}>
                SHOP{" "}
              </Link>
            </li>
            <li className={menu === "client" ? "menu-back" : <></>}>
              <Link to="/clientarea" onClick={() => setmenu("client")}>
                CLIENT AREA{" "}
              </Link>
            </li>
            <li className={menu === "contact" ? "menu-back" : <></>}>
              <Link to="/contact" onClick={() => setmenu("contact")}>
                CONTACT{" "}
              </Link>
            </li>
          </ul>
          <div className="btn nav-btn">
            <button type="submit">
              <a href="#">
                <span>
                  <i class="fa-solid fa-phone"></i>
                </span>
                (000) 123-456
              </a>
            </button>
          </div>
          <div className="menu-icon">
            <span>
              <i class="fa-solid fa-bars" onClick={() => setshow(!show)}></i>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
