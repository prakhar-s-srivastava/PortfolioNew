import "../Css/Header.css";
import "../Css/Neomorphics.css";
import logo from "../Res/logo.svg";
import React, { useState } from "react";  
import { useLocation } from "react-router-dom"; 
function Header(props) {

  const [page, setPage] = useState("Home");
  const location = useLocation();
  console.log(location.pathname.substring(1));
  
  return (
    <div id="header">
      <div
        style={{
          alignSelf: "left",
          float: "left",
        }}
      >
        <img
          src={logo}
          style={{
            alignSelf: "left",
            float: "left",
          }}
        ></img>
        <h3
          style={{
            color: "#341195",
          }}
        >
          Prakhar Srivastava
        </h3>
      </div>
      <div
        className="neomorphics-up"
        style={{
          alignSelf: "left",
          float: "right",
          padding: "1%",
        }}
      >
        <ul>
          <li
            className={location.pathname.substring(1) == "" ? "selected" : ""}
            onClick={() => {
              setPage("Home");
            }}
          >
            <a href="/"> Home</a>
          </li>
          <li>
            <a
              href="/Projects"
              className={
                location.pathname.substring(1) == "Projects" ? "selected" : ""
              }
              onClick={() => {
                setPage("Projects");
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a> About Me</a>
          </li>
          <li>
            <a> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;