import Paper from "paper";
import Flocker from "./Flock";

const draw1 = () => {

  let a = new Flocker(Paper);
    //  let myPath = new paper.Path();

    //  paper.view.onMouseEnter = (event) => {
    //    myPath.strokeColor = "black";
    //    myPath.strokeWidth = 3;
    //  };
    //  paper.view.onMouseMove = (event) => {
    //    myPath.add(event.point);
    //    console.log("moving");
    //  };

  
  Paper.view.draw();
};

export default draw1;
