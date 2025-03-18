import Image from "next/image";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-bg">

 

    <Navbar/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Experience/>
    <ContactMe/>
    <Footer/>
  
     </div>
  );
}
