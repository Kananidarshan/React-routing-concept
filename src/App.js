import React from "react";
import Home from './Home.js';
import About from './About.js';
import Error from './Error.js';
import Contect from "./Contect.js";

import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function App(){
  return(
    <div>
        <Router>
          <div style={{backgroundColor:"greenyellow",textAlign:"center"}}>
          <Link to="/Home">Home</Link> |
          <Link to="/About">About</Link> |
          <Link to="/Error">Error</Link> |
          <Link to="/Contect">Contect</Link>
          </div>
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Error" element={<Error/>}/>
            <Route path="/Contect" element={<Contect/>}/>
            <Route path="/Contect/:mynumber" element={<Contect/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;