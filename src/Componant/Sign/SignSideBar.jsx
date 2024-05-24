import React, { useState } from "react";
import "./sign.css";
import sideicon1 from "../../Images/sideicone1.png";
import sideicon2 from "../../Images/sideicon2.png";
import sideicon3 from "../../Images/sideicon3.png";
import sideicon4 from "../../Images/sideicon4.png";
import sideicon5 from "../../Images/sideicon5.png";
import Categories from "./Categories";
const minus = <i class="fa-solid fa-minus"></i>;
const ban = <i class="fa-solid fa-ban"></i>;
const plus = <i class="fa-solid fa-plus"></i>;
function SignSideBar({ changeImage }) {
  const [catg, setcatg] = useState(Categories.slice(0, 6));

  const handlecat = (catitem) => {
    const updatecate = Categories.filter((element) => {
      return element.category === catitem;
    });

    setcatg(updatecate.slice(0, 6));
  };
  return (
    <>
      <div class="card">
        <div className="card-top">
          <div className="top-ban">
            <span className="ban">{ban}</span>
            <p>Prohibition</p>
          </div>
          <span>{minus}</span>
        </div>
        <div className="card-icon">
          {catg.map((item, index) => {
            return (
              <div className="card-image" key={index}>
                <img
                  src={item.icon}
                  class="card-img-top"
                  alt="..."
                  onClick={() => changeImage(index)}
                />
              </div>
            );
          })}
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item" onClick={() => handlecat("Warning")}>
            <img src={sideicon1} alt="" />
            Warning <span>{plus}</span>
          </li>
          <li class="list-group-item" onClick={() => handlecat("Prohibition")}>
            <img src={sideicon2} alt="" />
            Mandatory <span>{plus}</span>
          </li>
          <li class="list-group-item" onClick={() => handlecat("safety")}>
            <img src={sideicon3} alt="" />
            Safety Standard<span>{plus}</span>
          </li>
          <li class="list-group-item" onClick={() => handlecat("safe")}>
            <img src={sideicon4} alt="" />
            Safe Conditon<span>{plus}</span>
          </li>
          <li class="list-group-item">
            <img src={sideicon5} alt="" />
            Fire Equipment<span>{plus}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SignSideBar;
