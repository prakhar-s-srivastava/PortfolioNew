import Canvas from "./Canvas";
import "../Css/Neomorphics.css"
import "../Css/Home.css"
import prakhar from "../Res/Prakhar.png"
import logo from "../Res/logo.svg"

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
      </div>
      <Canvas />
      <div className="canvas-div">
        <div id="image-div" className="neomorphics-up">
          <img src={prakhar} id="img_prakhar" alt="Italian Trulli"></img>
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
            I was part of clubs like Design Studio and Dramatics pushing me
            forward towards innovation and a creative lifestyle.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
