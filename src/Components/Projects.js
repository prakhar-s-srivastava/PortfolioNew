import FlippingCard from "./FlippingCard";
import dummy from "../Res/demo.jpg";
import mocap from "../Res/mocap.png"
import mocapunity from "../Res/mocapunity.png"
import doubleHand from "../Res/Doubletracking.png"
import gamemaker from "../Res/gamemaker.png"
import ray from "../Res/out.jpg"
import pbr from "../Res/pbr.jpg"
import Ql from "../Res/Qlearning.png"
import filter from "../Res/Filter.png"
import imgrec from "../Res/ImgRecog.png"
import render from "../Res/export_img.png"
import clothGeneration from "../Res/customClothes.png"
import portfolio from "../Res/PortfolioWebsite.png"
import selfieToavatar from '../Res/selfieToavatar.png'
import flamMocap from '../Res/flamMocap.png'
import imageTracking from '../Res/imageTracking.png'
import masstune from '../Res/masstune.png'
import recloth1 from "../Res/recloth1.png"
import recloth2 from "../Res/recloth2.png"
import recloth3 from "../Res/recloth3.png"
import imgComp from '../Res/ImageCompsition.jpeg'


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
          fontSize: "3rem",
          // transform: "translate(-50%, -50%)",
        }}
      >
        <h1
        style={{
          
          width: " 100%",
          background: "transparent !important",
          top: "20%",
          left: "10%",
          fontSize: "2rem",
          color:"white",
          backgroundColor:"#341195",
          // padding:"0.3rem",
          borderRadius:"6px",
          paddingBottom:"0.5rem"

          // transform: "translate(-50%, -50%)",
        }}
        >
          
        Projects
        </h1>
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
              ProjectName="Cloth Design Generation"
              ProjectSummary=" Use Gen AI for cloth generation for avatar"
              ProjectDescription=" Use Gen AI for cloth generation for avatar, the cloths are generated on a particular UV map, depending on cloth style and type"
              Link="https://flamapp.ai/avatars"
              ProjectImage={clothGeneration}
            />
            <FlippingCard
              ProjectName="Use Selfie to create a look-A-like avatar"
              ProjectSummary="White-Box algorithm to generate avatar faces according to selfie"
              ProjectDescription="We used white-box fixed blend shape based 3d face generator to generate the faces from selfie, from an analysis of faces and parts-of-face types and categories"
              ProjectImage={selfieToavatar}
              Link="https://flamapp.ai/avatars"
            />
            <FlippingCard
              ProjectName=" Almost Realtime motion cature, using a a set of algorithms "
              ProjectSummary="Used non-standard quaternion and 3d space prediction to re-create motion in a virtual enviroment "
              ProjectDescription="Used non-standard quaternion and 3d space prediction to re-create motion in a virtual enviroment "
              Link="https://flamapp.ai/mocap"
              ProjectImage={flamMocap}
            />
            <FlippingCard
              ProjectName="Light weight image tracker"
              ProjectSummary="This a very light weight image tracker"
              ProjectDescription=" This is a very light weight image tracker (~200kb), that ran on edge"
              Link="https://brandequity.economictimes.indiatimes.com/news/marketing/britannia-unveils-ai-powered-camera-campaign-for-nutrichoice-with-ranveer-singh/108650822"
              ProjectImage={imageTracking}
            />
          </div>
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
              ProjectName="Masstune"
              ProjectSummary=" Mass croping, whitebalancing, tilt fixing and much more "
              ProjectDescription="We used severel AI models to process images in mass, for photographers in USA"
              Link="https://masstune.xyz/"
              ProjectImage={masstune}
            />
            <FlippingCard
              ProjectName="AI cloth changer "
              ProjectSummary="It uses AI to change cloths of a person "
              ProjectDescription="This project was a combination of inpainting, Lora and cloth matting"
              ProjectImage={recloth1}
              Link={recloth2 }
            />
            <FlippingCard
              ProjectName="Double Hand Tracking in VR "
              ProjectSummary="Both hand Tracking in VR using Mediapie-hands"
              ProjectDescription="Tracking both hands using Mediapipe hands and in VR without Google Cardboard "
              Link="https://youtu.be/Xuv-G2d9JYM"
              ProjectImage={imgComp}
            />
            <FlippingCard
              ProjectName="Portable Game Maker"
              ProjectSummary="Portble Game Maker(Maker -OpenGL3.0 , Game -BGFX)"
              ProjectDescription=" Game Maker Works on Opengl but uses seprate libraries for object management and physics which can be seperately used while exporting game, it can use separate Graphics-api for running games.
                  It makes  it easier to move to 'Vukan' or 'Metal' ."
              Link="https://boldhonor.github.io/MyPortfolio/Project%20Descriptions/Portble%20Game%20Maker.html"
              ProjectImage={gamemaker}
            />
          </div>
          </div>
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
              ProjectName="Mocap Animation to Unity"
              ProjectSummary="Convert the mocap from video to unity animation"
              ProjectDescription="Using a video to extract animation to be used in unity and mixamo character"
              ProjectImage={mocapunity}
              Link="https://youtu.be/xIboJy-6ZNc"
            />
            <FlippingCard
              ProjectName="Double Hand Tracking in VR "
              ProjectSummary="Both hand Tracking in VR using Mediapie-hands"
              ProjectDescription="Tracking both hands using Mediapipe hands and in VR without Google Cardboard "
              Link="https://youtu.be/Xuv-G2d9JYM"
              ProjectImage={doubleHand}
            />
            <FlippingCard
              ProjectName="Portable Game Maker"
              ProjectSummary="Portble Game Maker(Maker -OpenGL3.0 , Game -BGFX)"
              ProjectDescription=" Game Maker Works on Opengl but uses seprate libraries for object management and physics which can be seperately used while exporting game, it can use separate Graphics-api for running games.
                  It makes  it easier to move to 'Vukan' or 'Metal' ."
              Link="https://boldhonor.github.io/MyPortfolio/Project%20Descriptions/Portble%20Game%20Maker.html"
              ProjectImage={gamemaker}
            />
          </div>
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
              ProjectName=" Ray Tracing"
              ProjectSummary="Lighting model Ray Tracing on CPU"
              ProjectDescription="This is a Ray Tracer uses phone lighting model along with phong 
              shading concepts to light the scene and assign colors . This was a project after completing Computer graphics course from IIT-G"
              ProjectImage={ray}
              Link="https://boldhonor.github.io/MyPortfolio/Project%20Descriptions/RayTracer.html"
            />
            <FlippingCard
              ProjectName=" PBR materials generator"
              ProjectSummary="Use WEBGL to convert your TEXTURES to PBR materials without resolution loss"
              ProjectDescription="This uses your own GPU to calculate all the necessary maps using shaders on GPU"
              Link="https://textureassetgenerator-67fe9.web.app/"
              ProjectImage={pbr}
            />
            <FlippingCard
              ProjectName="Q-Learning To play a Platforma"
              ProjectSummary="Q -Learning is one of the best ways of enviournment dependent learning. "
              ProjectDescription="In this project the 4 white strips is the vision range of our learner . The training starts from  no bias. The reward is given at every step take in forward direction and touching the base while punichment is take as more time passes . hitting an enemy gives You reward but  not hitting dosent cost anything ."
              Link="https://www.linkedin.com/posts/prakharsrivastavagamedeveloper_cplusplus-sfml-environment-activity-6773636906207989760-OK4N?utm_source=share&utm_medium=member_desktop"
              ProjectImage={Ql}
            />
            <FlippingCard
              ProjectName="FIlters Made on Unity-3D Shader Program"
              ProjectSummary="This Projects uses Shaders-lab of unity written using HLSL"
              ProjectDescription="Diffrent Filters use diffrent fraagment shaders to render diffrent filters. The HLSL is c-style and thus functions are defined over varioud files."
              Link="https://boldhonor.github.io/MyPortfolio/Project%20Descriptions/Shaders.html"
              ProjectImage={filter}
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
              ProjectName="Image Searching using un-supervised learning"
              ProjectSummary="Searching from a set of image database(10k) under in about 100ms "
              ProjectDescription="This project was a GUI demo of a cloud image search engine"
              Link="https://youtu.be/i157hjiLFtc"
              ProjectImage={imgrec}
            />
            <FlippingCard
              ProjectName="Server Image Rendering "
              ProjectSummary="Rendering Raster images on server using Godot "
              ProjectDescription="It takes 1 sec to render a 10 second video"
              ProjectImage={render}
            />
            <FlippingCard
              ProjectName="PortfolioWebsite using Three-JS and webGL"
              ProjectSummary="This Portfolio website was made usng ThreeJs and concepts of Webgl which is very similar to mordern Opengl"
              ProjectDescription="The main assets and models were self created  using Blender from 'Jelly-Virus animation' to 'scroll to play animation'  taking inspiration from various website like 'Apple airpod'
              the majority of the website is self coded and used HTML , CSS, Javascript and BootsTrap. The website is created static so that it can be uploaded on github. "
              Link="https://boldhonor.github.io/MyPortfolio/"
              ProjectImage={portfolio}
            />
          
          </div>
        </div>
      </div>
    );
}

export default Projects;