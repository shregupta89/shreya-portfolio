
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";

export default function Home() {
  return (
    <div className="bg-bg">

 

    <Navbar/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Experience/>
   
    <Achievements/>
    <ContactMe/>
    <Footer/>
    
  
     </div>
  );
}
