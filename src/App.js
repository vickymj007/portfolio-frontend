import { useState } from "react";
import './app.css'
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects.jsx";
import Skills from "./Components/Skills/Skills";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function App() {
  const [darkMode,setDarkMode] = useState(false)

  const handleClick = ()=>{
    setDarkMode(prevState => !prevState)
  }

  const styles = {
    primary:{
      backgroundColor:darkMode?"rgb(30, 30, 30)":"#f8f9fa",
      color:darkMode? "white" : "black"
    },
    secondary:{
      backgroundColor:darkMode?"rgb(60, 60, 60)":"white",
    },
    input:{
      backgroundColor:darkMode?"rgb(50, 50, 50)":"white",
      color:darkMode? "white" : "black"
    },
    nav : {
      backgroundColor:darkMode?"black":"#e9ecef",
    },
    before:{
      boxShadow:`5px 5px 0 5px ${darkMode? "rgb(60, 60, 60)" : "rgb(255, 255, 255)"}`
    },
    after:{
      boxShadow:`-5px 5px 0 5px ${darkMode? "rgb(60, 60, 60)" : "rgb(255, 255, 255)"}`
    },
    button :{
      backgroundColor:darkMode ? "white" : "black",
      color:darkMode ? "black" : "white"
    },
    heading:{
      backgroundColor:darkMode ? "rgb(30, 30, 30)" : "#f8f9fa",
    }
  }

  return (
    <div className="App" style={styles.primary}>
      <Navbar darkMode={darkMode} styles={styles}/>
      <Intro/>
      <Skills styles={styles}/>
      <Projects styles={styles}/>
      <Education darkMode={darkMode} styles={styles}/>
      <Experience styles={styles}/>
      <Contact styles={styles}/>
      <span className="darkmode_btn" onClick={handleClick} style={{backgroundColor:darkMode? "white": "black"}}>
        {darkMode? <MdLightMode className="light"/> : <MdDarkMode className="dark"/>}
      </span>
    </div>
  );
}

export default App;
