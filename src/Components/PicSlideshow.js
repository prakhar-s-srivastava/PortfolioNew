import "../Css/PicSLldeShow.css"
import prakhar from "../Res/Prakhar.png";
import prakhar2 from "../Res/Prakhar2.png";
import prakhar3 from "../Res/Prakhar3.png";
import prakhar4 from "../Res/Prakhar4.png";
import prakhar5 from "../Res/Prakhar5.png";
import "../Css/Home.css"
import { useState, useEffect } from "react";
import "../Css/Neomorphics.css"

let class2 = "image2";
let class1 = "image1";
let class3 = "image3";
export default  function PicSlideShow()
{
    
    const [image1, setImage1] = useState(class1);
    const [image2, setImage2] = useState(class2);
   
    useEffect(() => {
       setTimeout(() => {
           [class1,class2,class3] = [class2,class3,class1];
           setImage2(class2);
        //  setImage1(class2);
        //    console.log(class1);
       }, 4000);
    });

    return (
      <div>
        <div id="mainDiv" className="image-div">
          <div className={"inside  " + class1}>
            <img src={prakhar}></img>
          </div>
          <div id={class2} className={"inside " + class2}>
            <img src={prakhar2}></img>
          </div>
          <div id={class3} className={"inside " + class3}>
            <img src={prakhar3}></img>
          </div>
        </div>
      </div>
    );

}