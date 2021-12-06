import React from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
// import thamigirls from "../../assests/thamigirls.jpg";
// import aboutcard3 from "../../assests/aboutcard3.jpg";
// import aboutcard4 from "../../assests/aboutcard4.jpg";
import './mstyles.css';
import GoTOTop from "../goToTop";
import { useSelector } from "react-redux";

const VisionAndMission = () => {
  const visionSection = useSelector((state) => state.aboutStore.visionSection);
  const missionSection = useSelector(
    (state) => state.aboutStore.missionSection
  );
  const visionMissionPageHeading = useSelector(
    (state) => state.aboutStore.visionMissionPageHeading
  );
  return (
    <div>
      <div
        className="visionAndMissionBanner"
        style={{
          backgroundImage: `url(${
            visionMissionPageHeading ? visionMissionPageHeading.image : null
          })`,
        }}
      >
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h2 style={{ fontWeight: "bold", color: "white" }}>
              {visionMissionPageHeading
                ? visionMissionPageHeading.pageHeading
                : null}

              {/* Our Vision and Mission        */}
            </h2>
            <p style={{ color: "white" }}>
              {visionMissionPageHeading
                ? visionMissionPageHeading.pageSubHeading
                : null}
              {/* We are a social unit with community such as norms. */}
            </p>
          </div>
        </Container>
      </div>
      <div
        style={{
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <Container>
          <div className="row">
            <div
              className="col-md-12 col-lg-6 col-sm-12 col-xs-12"
              style={{ marginBottom: "30px" }}
            >
               <div style={{backgroundImage:`url(${visionSection? visionSection.image : null})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%', minHeight:'400px'}}>

              </div>
              {/* <img
                src={visionSection ? visionSection.image : null}
                style={{ width: "100%", height: "100%" }}
              ></img> */}
            </div>
            <div
              className="col-md-12 col-lg-6 col-sm-12 col-xs-12"
              style={{ marginTop: "30px" }}
            >
              <h3
                className="topTitle vmTitle"
                style={{
                  marginTop: "30px",
                  fontSize:"28px"
                }}
              >
                {visionSection ? visionSection.topTitle : null}
                {/* Our Vision */}
              </h3>
              {/* <h2 className="middleTitle" style={{}}>
                {visionSection ? visionSection.heading : null} */}

                {/* A Community Vision is an image of a community's future */}
              {/* </h2> */}
              <p className="paragraph" style={{}}>
                {visionSection ? visionSection.detail : null}

                {/* We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform. */}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{
          background: "#f6b745",
          paddingTop: "90px",
          paddingBottom: "90px",
        }}
      >
        <Container>
          <div className="row">
            <div
              className="col-md-12 col-lg-6 col-sm-12 col-xs-12 order-sm-2 order-md-2 order-lg-1 order-2"
              style={{ marginTop: "30px" }}
            >
              <h3
                className="topTitle vmTitle"
                style={{
                  marginTop: "30px",
                  fontSize:"28px"
                }}
              >
                {missionSection ? missionSection.topTitle : null}

                {/* Our Mission */}
              </h3>
              {/* <h2 className="middleTitle" style={{}}>
                {missionSection ? missionSection.heading : null} */}

                {/* A Community Mission is an image of a community's future */}
              {/* </h2> */}
              <p className="paragraph" style={{}}>
                {missionSection ? missionSection.detail : null}

                {/* We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform. */}
              </p>
            </div>
            <div
              className="col-md-12 col-lg-6 col-sm-12 order-md-1 order-lg-2 order-sm-1 order-1"
              style={{ marginBottom: "30px" }}
            >
              <div style={{backgroundImage:`url(${missionSection? missionSection.image : null})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%',minHeight:'400px'}}>

              </div>
              {/* <img
                src={missionSection ? missionSection.image : null}
                style={{ height: "100%", width: "100%" }}
              ></img> */}
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
    </div>
  );
};

export default VisionAndMission;
