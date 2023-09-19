import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projcets";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
