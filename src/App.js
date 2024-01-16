import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Education/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
