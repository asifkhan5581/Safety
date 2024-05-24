import React from "react";
import CategoriesData from "./CategoriesData";
function Categories(props) {
  return (
    <>
      <div className="cat-card">
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="cat-image">
          <img src={props.image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Categories;
