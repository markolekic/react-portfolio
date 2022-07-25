import "./App.css";
import { useState } from "react";
import { aboutInfo } from "./components/AboutSection/Data";
import { projects, contact } from "./components/HelperSection/Data";
import { projectSection } from "./components/ProjectSection/Data";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Helper from "./components/HelperSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroBanner />
      <AboutSection {...aboutInfo} />
      <Helper {...projects} />
      <ProjectsSection {...projectSection} />
      <Helper {...contact} />
      <Footer />
    </>
  );
};

export default App;
