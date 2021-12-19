import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './Components/Projects';


ReactDOM.render(

  
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
