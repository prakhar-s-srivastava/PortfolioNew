import FlippingCard from "./FlippingCard";
import dummy from "../Res/demo.jpg";
import mocap from "../Res/mocap.png"
import mocapunity from "../Res/mocapunity.png"


function Projects()
{


    return (
      <div
        style={{
          position: "absolute",
          width: " 80%",
          background: "transparent !important",
          top: "20%",
          left: "10%",
          fontSize: "3rem"
          // transform: "translate(-50%, -50%)",
        }}
      >
        Projects
        <div
          style={{
            marginTop: "5%",
            // padding: "5%"
          }}
          className=" "
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FlippingCard
              ProjectName="Mocap Animation"
              ProjectSummary="Mocation captiure from video "
              ProjectDescription="Using a video to extract animation to be used in unity and blender"
              Link="https://youtu.be/AB7tSxjcvNM"
              ProjectImage={mocap}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={mocapunity}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
            <FlippingCard
              ProjectName="Dummy"
              ProjectSummary="Dummy Summary"
              ProjectDescription="Dummy Description"
              ProjectImage={dummy}
            />
          </div>
        </div>
      </div>
    );
}

export default Projects;