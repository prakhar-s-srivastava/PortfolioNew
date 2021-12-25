import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Components/Home";
import reportWebVitals from "./reportWebVitals";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects";
import { useLocation } from "react-router-dom"; 
import SideMenu from './Components/SideMenu';

function App() {

  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
