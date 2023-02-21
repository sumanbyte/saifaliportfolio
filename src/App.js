import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/good_ui/Home";
import Projects from "./components/good_ui/Projects";
import About from "./components/good_ui/About";
import Navbar from "./components/good_ui/Navbar";
import BadNavbar from "./components/bad_ui/Bad_NavBar"
import BadHome from "./components/bad_ui/Bad_Home"
import BadAbout from "./components/bad_ui/Bad_About"
import Black from "./components/good_ui/Black";
import BadProjects from "./components/bad_ui/Bad_Projects";
import { useContext } from "react";
import AppContext from "./context/createContext";

function App() {
  const {checked} = useContext(AppContext)
  return (
    <div>

    <Router>
    {checked ? <Navbar/> : <BadNavbar/>}
      <Routes>
        <Route path="/" element={checked ? <Home/> : <BadHome />}/>
        <Route path="/projects" element={checked ? <Projects verticalsocials={true}/> :<BadProjects verticalsocials={true}/>} />
        <Route path="/resume" element={null} />
        <Route path="/about" element={checked ? <About verticalsocials={true}/> : <BadAbout verticalsocials={true}/>} />
      </Routes>
    <Black/>
    </Router>
    </div>
  
  );
}

export default App;
