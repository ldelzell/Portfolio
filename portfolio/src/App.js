import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './Pages/Home/NavBar';
import Home from './Pages/Home/Homescreen';
import Photography from './Pages/Home/Photography';
//set paths
function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='*' element={<div>404 Not Fount</div>}></Route>
            <Route path='/Photography' element={<Photography />}></Route>
          </Routes>
        </div>
       </Router>
    </div>
  );
}

export default App;
