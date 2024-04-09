import "../Css/Flipping.css"
import prakhar from "../Res/Prakhar.png";
import "../Css/Neomorphics.css"
    
    
export default function  FlippingCard( props)
{
     return (
       <div className="flip-card">
         <div className="flip-card-inner neomorphics-up-small">
           <div className="flip-card-front neomorphics-up-small">
             <img
               src={props.ProjectImage}
               alt="Avatar"
               style={{
                 height: "60%",
                 width: "90%",
                objectFit: "contain"
                //  width: "auto",
               }}
             />
             <div
               style={{
                 color: "#341195",
                 fontSize: "1rem",
               }}
             >
               <b>{props.ProjectName}</b>{" "}
             </div>
             <div
               style={{
                 color: "#341195",
                 marginTop: "3%",
              
               }}
             >
               {props.ProjectSummary}
             </div>
           </div>
           <div className="flip-card-back neomorphics-up-small">
             <p>{props.ProjectDescription}</p>

             <a href={props.Link} target="blank"> <button className=" " style={{
              width:"50%",
              padding:"1rem",
              backgroundColor:"#341195",
              borderRadius:"6px",
              color:"white",
              border:"none",
              top:"auto",
              position:"absolute",
              margin:"auto",
              left:"auto",
              right:"auto",
              alignSelf:"center", 
              left:"50%",
              right:"50%",
              transform:"translate(-50%,-50%)",
              bottom:"2%"
             }}>Visit</button> </a>
           </div>
         </div>
       </div>
     );
}