import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "react-scroll-to-top";
import "./Main.css"
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills"
import Location from "./Components/Location"
import Footer from "./Components/Footer"
AOS.init();
const Main = () => {
  return (
    <div>
<Intro/>
<Education/>
<Projects/>
<Skills/>
<Location/>
<Footer/>
<ScrollToTop className="scroll-to-top"/>
    </div>

  );
};
export default Main;
