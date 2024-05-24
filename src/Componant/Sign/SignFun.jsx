import React, { useState } from "react";
import "./sign.css";
const left = <i class="fa-solid fa-chevron-left"></i>;
const right = <i class="fa-solid fa-chevron-right"></i>;
function SignFun({
  currentImage,
  onLeftArrowClick,
  onRightArrowClick,
  sliderIcon,
}) {
  const [signText, setSignText] = useState("");
  const [addItem, setAddItem] = useState(null);
  const TextChange = (e) => {
    setSignText(e.target.value);
  };
  const AddText = () => {
    if (signText !== "" && !addItem) {
      setAddItem(signText);
      setSignText("");
    }
  };
  const DeleteText = () => {
    setAddItem(null);
  };
  return (
    <>
      <div className="sign-fun">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 bg-light mt-5">
              <div className="slide-icon mt-5">
                <span onClick={onLeftArrowClick}>{left}</span>
                <img src={currentImage} alt="" />
                <span onClick={onRightArrowClick}>{right}</span>
              </div>
              <div className="text-area mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your Sign text"
                  value={signText}
                  onChange={TextChange}
                />
              </div>
              <div className="sign-button mt-3">
                <button>Left</button>
                <button>center</button>
                <button>Right</button>
              </div>
              <div className="sign-second-btn mt-3">
                <button>Update Sign Text</button>
                <button>Copy Pictogram to All</button>
              </div>
            </div>
            <div className="col-lg-6 bg-light mt-5">
              <div className="change-icon mt-5">
                <img src={currentImage} alt="" />
              </div>
              <div className="change-text mt-3">
                {addItem && <p>{addItem}</p>}
              </div>
              <div className="sign-second-btn mt-3">
                <button onClick={AddText}>Preview & confirm</button>
                <button onClick={DeleteText}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignFun;
