import "../Css/sideMenu.css"
import instagram from "../Res/instagram.png"
import facebook from "../Res/facebook.png"
import linkedin from "../Res/linkedin.png"
import "../Css/Neomorphics.css"

export default function  ()
{

    return (
      <div className=" sideMenu">
        <div className="neomorphics-round">
          <a href="https://www.instagram.com/flux.blue_only/" target="blank">
            <img className="SidemenuImage eff1  eff2" src={instagram}></img>
          </a>
        </div>
        <div className="neomorphics-round">
          <a href="https://www.facebook.com/prakhars.srivastava.7/" target="blank">
            <img className="SidemenuImage eff1  eff2" src={facebook}></img>
          </a>
        </div>
        <div className="neomorphics-round">
          <a href="https://www.linkedin.com/in/prakharsrivastavagamedeveloper/" target="blank">
            <img className="SidemenuImage eff1  eff2" src={linkedin}></img>
          </a>
        </div>
      </div>
    );
}