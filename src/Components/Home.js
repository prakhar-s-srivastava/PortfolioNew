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
import PicSlideshow from "./PicSlideshow"
import Crousel from "./Crousel"
import Header from "./Header";
import SideMenu from "./SideMenu";



function Home() {
 

  return (
    <div className="App">
      {/* <div id="header">
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
      </div> */}

      <SideMenu/>

      <Canvas />
      <div
        className="canvas-div"
        style={{
          background: "transparent",
          // display:"none"
        }}
      >
        <div>
          {/* <Crousel image = {prakhar} />  */}
          {/* <div id="slider" className="image-div">
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
          </div> */}
          <PicSlideshow className="iamge-div" />
        </div>
        <div id="left">
          <div id="intro"> Hi There, I am </div>
          <div id="title" className="neomorphics-up">
            Prakhar Srivastava
          </div>
          <div id="about_me">
            I love creating and innovating. Fond of interactive technologies
            since the beginning I have worked on Game Development, Computer
            Graphics and Machine Learning. During my college years.
            I was part of clubs and societies like Design Studio and Dramatics
            pushing me forward towards innovation and a creative lifestyle.
            
          </div>
          <a href="/Projects">
          <button
            style={{
              marginTop: "5%",
              fontSize: "2vh",
              padding: "2%",
              borderRadius: "10px",
              borderColor: "#341195",
              color: "white",
              backgroundColor: "#341195",
              
            }}
            >
            Learn More
          </button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
