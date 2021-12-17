import Canvas from "./Canvas";
import "../Css/Neomorphics.css"
import "../Css/Home.css"
import "../Css/Header.css"
import "../Css/ThreeDSlider.css"
import prakhar from "../Res/Prakhar.png"
import prakhar2 from "../Res/Prakhar2.png"
import prakhar3 from "../Res/Prakhar3.png"
import prakhar4 from "../Res/Prakhar4.png"
import prakhar5 from "../Res/Prakhar5.png"
import logo from "../Res/logo.svg"
import Crousel from "./Crousel"



function Home() {
 

  return (
    <div className="App">
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
            <li className="selected">
              <a> Home</a>
            </li>
            <li>
              <a> Projects</a>
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
      <Canvas  />
      <div className="canvas-div" style={{
        background: "transparent",
        // display:"none"
      }}>
        <div>
          {/* <Crousel image = {prakhar} /> */}
          <div id="slider" className="image-div">
            <input type="radio" name="slider" id="s1" />
            <input type="radio" name="slider" id="s2" />
            <input type="radio" name="slider" id="s3" defaultChecked />
            <input type="radio" name="slider" id="s4" />
            <input type="radio" name="slider" id="s5" />
            <label htmlFor="s1" id="slide1">
              <Crousel image={prakhar3} />
            </label>
            <label htmlFor="s2" id="slide2">
              <Crousel image={prakhar2} />
            </label>
            <label htmlFor="s3" id="slide3">
              <Crousel image={prakhar} />
            </label>
            <label htmlFor="s4" id="slide4">
              <Crousel image={prakhar4} />
            </label>
            <label htmlFor="s5" id="slide5">
              <Crousel image={prakhar5} />
            </label>
          </div>
        </div>
        <div id="left">
          <div id="intro"> Hi There, I am </div>
          <div id="title" className="neomorphics-up">
            Prakhar Srivastava
          </div>
          <div id="about_me">
            I love creating and innovating. Fond of interactive technologies
            since the begnning I have worked on Game Development, Computer
            Graphics and Machine Lerning. During my collage years at IIT Roorkee
            I was part of clubs and societies like Design Studio and Dramatics
            pushing me forward towards innovation and a creative lifestyle.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
