

function Crousel(props) {
    
    return (
      <div
        // className="neomorphics-up"
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          background:"transparent"
        }}
      >
        <img src={props.image} id="img_prakhar" alt="Italian Trulli"></img>
      </div>
    );
}

export default Crousel;