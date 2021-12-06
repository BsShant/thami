import React from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/video.jpeg";
import GoTOTop from "../goToTop";
import { List, Card, Image } from 'antd';

import { useSelector } from "react-redux";

const AboutUs = () => {
  const ourStorySection = useSelector(
    (state) => state.aboutStore.ourStorySection
  );
  const ourHistorySection = useSelector(
    (state) => state.aboutStore.ourHistorySection
  );
  const ourStoryPageHeading = useSelector(
    (state) => state.aboutStore.ourStoryPageHeading
  );
  const associateSection = useSelector(
    (state) => state.aboutStore.associateSection
  );

  return (
    <div>
      <div
        className="aboutUsBanner"
        style={{
          backgroundImage: `url(${
            ourStoryPageHeading ? ourStoryPageHeading.image : null
          })`,
        }}
      >
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h2 style={{ fontWeight: "bold", color: "white" }}>
              {ourStoryPageHeading ? ourStoryPageHeading.pageHeading : null}

              {/* Who are we?        */}
            </h2>
            <p style={{ color: "white" }}>
              {ourStoryPageHeading ? ourStoryPageHeading.pageSubHeading : null}
              {/* We are a social unit with community such as norms. */}
            </p>
          </div>
        </Container>
      </div>
      <div style={{ marginTop: "50px" }}>
        <Container>
          <div className="row" style={{ padding: "10px  0 70px" }}>
            <div
              className="col-md-12 col-lg-6 col-sm-12 col-xs-12 order-md-2 order-lg-1 order-sm-2 order-2"
              style={{ marginBottom: "30px" }}
            >
              <h3
                className="topTitle"
                style={{
                  color: "#f6b745",
                  fontWeight: "bold",
                  marginTop: "50px",
                }}
              >
                {ourStorySection ? ourStorySection.topTitle : null}
                {/* Our Story */}
              </h3>
              <h2
                className="middleTitle"
                style={{
                  fontWeight: "bold",
                }}
              >
                {ourStorySection ? ourStorySection.heading : null}

                {/* Know About Our <br /> Thami Society */}
              </h2>
              <p className="paragraph" style={{}}>
                {ourStorySection ? ourStorySection.detail : null}

                {/* We are a social unit commonality such as norms, religion,
                values, custom or indentity. Our communicaty may share a sance
                of place situated in a given geographical area or in virtual
                space through communication platform. */}
              </p>
            </div>
            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 order-md-1 order-lg-2 order-sm-1 order-1">
              <div
                className="ourStory"
                style={{
                  backgroundImage: `url(${
                    ourStorySection ? ourStorySection.image : null
                  })`,
                  height:'100%', minHeight:'400px'
                }}
              ></div>

              {/* <img
                src={thamigirls}
                style={{ height: "100%", width: "100%" }}
              ></img> */}
            </div>
          </div>
          <hr
            class="col-md-12 mx-auto mb-5"
            style={{
              padding: "0.01rem",
              background: "grey none repeat scroll 0% 0%",
            }}
          />
        </Container>
      </div>
      <div>
        <Container>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col">
              <h3
                className="topTitle"
                style={{
                  color: "#f6b745",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                {ourHistorySection ? ourHistorySection.ourHistoryTitle : null}

                {/* Our History */}
              </h3>
              <p className="paragraph">
                {ourHistorySection ? ourHistorySection.ourHistoryDetail : null}

                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
              </p>
              {/* <p className="paragraph"> */}
              {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
s containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
              {/* </p> */}
            </div>
          </div>
        </Container>
      </div>

      <div style={{marginBottom:"70px"}}>
        <Container>
          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-12">
              <h3
                className="topTitle"
                style={{
                  color: "#f6b745",
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                {associateSection ? associateSection.title : null}

                {/* Our History */}
              </h3>
              <p className="paragraph">
                {associateSection ? associateSection.detail : null}

              </p>
              <div className="col-md-10 col-12" style={{display:"flex", justifyContent:"center", padding:"0px", margin:"auto"}}>
                <Image width="100%" src={`${associateSection? associateSection.image:null}`} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <GoTOTop />
    </div>
  );
};

export default AboutUs;
