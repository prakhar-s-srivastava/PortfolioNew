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
                 maxHeight: "60%",
                 maxWidth: "100%",
                 width: "auto",
               }}
             />
             <div
               style={{
                 color: "#341195",
                 fontSize: "150%",
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
              borderRadius:"10px",
              color:"white",
              border:"none"
             }}>Visit</button> </a>
           </div>
         </div>
       </div>
     );
}