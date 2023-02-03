import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Black from "./components/Black";

function App() {
  return (
    <div>

    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects verticalsocials={true}/>} />
        <Route path="/about" element={<About verticalsocials={true}/>} />
      </Routes>
    <Black/>
    </Router>
    </div>
  
  );
}

export default App;
