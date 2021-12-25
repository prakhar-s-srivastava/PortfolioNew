import FlippingCard from "./FlippingCard";
import dummy from "../Res/demo.jpg";

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