import React from "react";
import Nav from "../Componant/Navbar/Nav";
import Hero from "../Componant/Hero/Hero";
import Categories from "../Componant/Categoris/CategoriesData";
import Sign from "../Componant/Sign/SignMain";
import Slider from "../Componant/Slider/PreSlider";
import Footer from "../Componant/Footer/Footer";
function Home() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Categories></Categories>
      <Sign></Sign>
      <Slider></Slider>
      <Footer></Footer>
    </>
  );
}

export default Home;
