import React from "react";
import "./categories.css";
import Categories from "./Categories";
import image1 from "../../Images/category1.png";
import image2 from "../../Images/category2.png";
import image3 from "../../Images/category3.png";
import image4 from "../../Images/category4.png";
import image5 from "../../Images/category5.png";
import image6 from "../../Images/category6.png";
import image7 from "../../Images/category7.png";
import image8 from "../../Images/category8.png";
import image9 from "../../Images/category9.png";
import image10 from "../../Images/category10.png";
import image11 from "../../Images/category11.png";
import image12 from "../../Images/category12.png";
import image13 from "../../Images/category13.png";
import image14 from "../../Images/category14.png";
import image15 from "../../Images/category15.png";
function CategoriesData() {
  return (
    <>
      <div className="main-categories">
        <h1>All CATAGORIES</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image1}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image2}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image3}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image4}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image5}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image6}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image7}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4">
              <Categories
                title="Custom Safety Sign"
                image={image8}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image9}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image10}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image11}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image12}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image3}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image13}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image14}
              ></Categories>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <Categories
                title="Custom Safety Sign"
                image={image15}
              ></Categories>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesData;
