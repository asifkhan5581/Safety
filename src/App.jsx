import "./App.css";
import ClientArea from "./Pages/ClientArea";
import Home from "./Pages/Home";
import About from "./Pages/About";
import OurWork from "./Pages/OurWork";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/ourwork" element={<OurWork />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/clientarea" element={<ClientArea />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// font-family: 'Roboto', sans-serif;
