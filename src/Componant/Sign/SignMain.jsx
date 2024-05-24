import React, { useState } from "react";
import icon1 from "../../Images/icon1.png";
import icon2 from "../../Images/icon2.png";
import icon3 from "../../Images/icon3.png";
import icon4 from "../../Images/icon4.png";
import icon5 from "../../Images/icon5.png";
import icon6 from "../../Images/icon6.png";
import warning1 from "../../Images/warning1.png";
import warning2 from "../../Images/warning2.png";
import warning3 from "../../Images/warning3.png";
import warning4 from "../../Images/warning4.png";
import warning5 from "../../Images/warning5.png";
import warning6 from "../../Images/warning6.png";
import "./sign.css";
import SignSideBar from "./SignSideBar";
import sliderIcon from "../../Images/icon2.png";
import SignFun from "./SignFun";
function SignMain() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const IconImage = [
    {
      icon: icon1,
    },
    {
      icon: icon2,
    },
    {
      icon: icon3,
    },
    {
      icon: icon4,
    },
    {
      icon: icon5,
    },
    {
      icon: icon6,
    },
    {
      icon: warning1,
    },
    {
      icon: warning2,
    },
    {
      icon: warning3,
    },
    {
      icon: warning4,
    },
    {
      icon: warning5,
    },
    {
      icon: warning6,
    },
  ];
  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };
  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? IconImage.length - 1 : prevIndex - 1
    );
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === IconImage.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="main-sign">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <SignSideBar
                currentImage={IconImage[currentImageIndex].icon}
                changeImage={changeImage}
              ></SignSideBar>
            </div>
            <div className="col-lg-8 col-md-8 bg-white">
              <SignFun
                currentImage={IconImage[currentImageIndex].icon}
                onLeftArrowClick={handleLeftArrowClick}
                onRightArrowClick={handleRightArrowClick}
                sliderIcon={sliderIcon}
              ></SignFun>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignMain;
