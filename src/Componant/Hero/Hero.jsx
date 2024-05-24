import React, { useEffect, useState } from "react";
import "./hero.css";
import Sidebar from "./Sidebar";
function Hero() {
  const [categories, setcategories] = useState(false);
  const [visibility, setvisibilty] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setvisibilty(true);
      } else {
        setvisibilty(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const Scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="categories">
        <h1 onClick={() => setcategories(!categories)}>
          <span>
            <i class="fa-solid fa-bars"></i> Categories
          </span>
        </h1>
      </div>
      <div className="hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-0">
              <div
                className={categories ? "sidebar sidebar-active" : "sidebar"}
              >
                <Sidebar></Sidebar>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="hero-contant">
                <h1>
                  POPULAR SAFETY
                  <br /> SIGNS, TAGS,
                  <br /> LABELS etc
                </h1>
              </div>
            </div>
          </div>
        </div>
        {visibility && (
          <div className="scroll-icon">
            <span onClick={Scroll}>
              <i class="fa-solid fa-arrow-up"></i>
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Hero;
