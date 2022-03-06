import React from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import thamigirls from "../../assests/thamigirls.jpg";
import aboutcard3 from "../../assests/aboutcard3.jpg";
import aboutcard4 from "../../assests/aboutcard4.jpg";
import aboutcard5 from "../../assests/aboutcard5.jpg";
import GoTOTop from "../goToTop";
import { List, Card } from "antd";
import { useSelector } from "react-redux";
import { server } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { pushTeamReaderPage } from "../../store/readerStore/readerStore.action";
import { Link, useHistory } from "react-router-dom";

const OurTeam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ourTeamSection = useSelector(
    (state) => state.aboutStore.ourTeamSection
  );
  const ourTeamHeadingSection = useSelector(
    (state) => state.aboutStore.ourTeamHeadingSection
  );
  const ourTeamPageHeading = useSelector(
    (state) => state.aboutStore.ourTeamPageHeading
  );
  return (
    <div>
      <div
        className="ourTeamBanner"
        style={{
          backgroundImage: `url(${
            ourTeamPageHeading ? ourTeamPageHeading.image : null
          })`,
        }}
      >
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h2 style={{ fontWeight: "bold", color: "white" }}>
              {ourTeamPageHeading ? ourTeamPageHeading.pageHeading : null}

              {/* Our Team         */}
            </h2>
            <p style={{ color: "white" }}>
              {ourTeamPageHeading ? ourTeamPageHeading.pageSubHeading : null}
              {/* We are a social unit with community such as norms. */}
            </p>
          </div>
        </Container>
      </div>
      <div style={{ background: "#f6b745" }}>
        <div
          className="text-center col-md-10"
          style={{ padding: "80px 20px", margin: "auto" }}
        >
          <h3>
            {ourTeamHeadingSection ? ourTeamHeadingSection.topTitle : null}
            {/* Our Team */}
          </h3>
          <h2>
            {ourTeamHeadingSection ? ourTeamHeadingSection.heading : null}
          </h2>
          <p style={{ fontSize: "20px" }}>
            {ourTeamHeadingSection ? ourTeamHeadingSection.detail : null}

            {/* We are a social unit commonality such as norms, religion, values,
            custom or indentity. Our communicaty may share a sance of place
            situated in a given geographical area or in virtual space through
            communication platform. */}
          </p>
          <Container>
            <div className="row mt-5 reversePagination">
              <List
                style={{ width: "100%" }}
                grid={{
                  gutter: 16,
                  xs: 2,
                  sm: 2,
                  md: 2,
                  lg: 4,
                  xl: 4,
                  xxl: 3,
                }}
                pagination={{
                  onChange: (page) => {
                    window.scrollTo(0, 0);
                    console.log(page);
                  },
                  pageSize: 18,
                  position: "bottom",
                }}
                dataSource={ourTeamSection ? ourTeamSection : []}
                renderItem={(item) => (
                  <List.Item>
                    <div className="mb-5">
                      <img
                        src={`${server}/${item.memberImage}`}
                        style={{ width: "100%", aspectRatio: "5/7" , objectFit:'cover' }}
                      ></img>
                      <h3
                        className="mt-3 aboutUsCardOneLineElipsis"
                        style={{
                          fontWeight: "bold",
                          marginTop: "-7px",
                          marginBottom: "15px",
                          // height: "30px",
                          overflow: "hidden",
                        }}
                      >
                        {item.memberName}
                      </h3>
                      <p
                        className="aboutUsCardOneLineElipsis"
                        style={{ fontWeight: "bold", marginBottom: "7px" }}
                      >
                        {item.memberRole}
                      </p>
                      <p
                        className="aboutUsCardOneLineElipsis"
                        style={{ fontWeight: "bold", marginBottom: "7px" }}
                      >
                        {item.phone}
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                          height: "60px",
                          overflow: "hidden",
                        }}
                        className="headingElipsis"
                      >
                        {/* Short description will be here from the founder. */}
                        {item.memberDetail}
                      </p>
                      <button
                        className="buttonReverse"
                        onClick={() => {
                          dispatch(pushTeamReaderPage(item.memberId));
                          return history.push(
                            `/about/team-member-detail/${item.memberId}`
                          );
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </List.Item>
                )}
              />
              {/* <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
                <button className="buttonReverse">Learn More</button>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
                <button className="buttonReverse">Learn More</button>

              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
                <button className="buttonReverse">Learn More</button>

              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">Name Here</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>Founder</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>
                  Short description will be here from the founder.
                </p>
                <button className="buttonReverse">Learn More</button>

              </div> */}
            </div>
          </Container>
        </div>
      </div>
      <GoTOTop />
    </div>
  );
};
export default OurTeam;
