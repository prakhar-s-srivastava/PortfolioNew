import React, { useRef, useEffect } from "react";
import Paper from "paper";
import draw1 from "./draw1";


const Canvas = (props) => {
  const canvasRef = useRef(null);
  let canvas;
  useEffect(() => {
   canvas = canvasRef.current;
    Paper.setup(canvas);
    draw1();
   
  }, []);


  

  return <canvas ref={canvasRef} {...props} id="canvas" resize="true" className="neomorphics-up canvas-div"/>;
};

export default Canvas;
