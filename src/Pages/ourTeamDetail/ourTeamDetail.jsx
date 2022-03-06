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

const OurTeam = (props) => {
  const {memberId } = props.match.params;

  const ourTeamSection = useSelector(
    (state) => state.aboutStore.ourTeamSection
  );
  const teamData = useSelector((state) => state.readerStore.teamData);
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
        <Container>
          <div className="row" style={{ padding: "100px 0" }}>
            <div className="col-md-5 col-9 m-auto text-center" style={{margin:"auto"}}>
              <img
                src={`${server}/${
                  ourTeamSection &&
                  ourTeamSection.filter(
                    (data) => data.memberId.toString() === memberId.toString()
                  )[0]
                    ? ourTeamSection.filter(
                        (data) =>
                          data.memberId.toString() === memberId.toString()
                      )[0].memberImage
                    : null
                }`}
                style={{ width: "100%", objectFit:'cover', aspectRatio:'5/7' }}
              ></img>
            </div>
            <div className="col-12 pt-3 text-center">
              <h2>
                {ourTeamSection &&
                ourTeamSection.filter(
                  (data) => data.memberId.toString() === memberId.toString()
                )[0]
                  ? ourTeamSection.filter(
                      (data) => data.memberId.toString() === memberId.toString()
                    )[0].memberName
                  : null}
              </h2>
            </div>
            <div className="col-12 text-center">
              <h3>
                {ourTeamSection &&
                ourTeamSection.filter(
                  (data) => data.memberId.toString() === memberId.toString()
                )[0]
                  ? ourTeamSection.filter(
                      (data) => data.memberId.toString() === memberId.toString()
                    )[0].memberRole
                  : null}
              </h3>
            </div>
            <div className="col-12 text-center">
              <h3>
                {ourTeamSection &&
                ourTeamSection.filter(
                  (data) => data.memberId.toString() === memberId.toString()
                )[0]
                  ? ourTeamSection.filter(
                      (data) => data.memberId.toString() === memberId.toString()
                    )[0].phone
                  : null}
              </h3>
            </div>
            <div className="col-12" style={{ marginTop: "60px" }}>
              <p>
                {ourTeamSection &&
                ourTeamSection.filter(
                  (data) => data.memberId.toString() === memberId.toString()
                )[0]
                  ? ourTeamSection.filter(
                      (data) => data.memberId.toString() === memberId.toString()
                    )[0].memberDetail
                  : null}
              </p>
            </div>
            {/* <h3 className="mt-3" style={{ fontWeight: "bold", marginTop: "-7px", height: "30px", overflow:"hidden" }}>{item.memberName}</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>{item.memberRole}</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px", height: "60px", overflow:"hidden" }}>
                    </p> */}
            {/* <List
                          style={{width:"100%"}}
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 2,
      lg: 4,
      xl: 4,
      xxl: 3,
    }}
    pagination={{
      onChange: page => {
        window.scrollTo(0,0);
        console.log(page);
      },
      pageSize: 18,
      position:"bottom"
    }}
    dataSource={ourTeamSection? ourTeamSection: []}
    renderItem={item => (
      <List.Item >
       <div className="mb-5">
                <img src={`${server}/${item.memberImage}`} style={{ width: "100%" }}></img>
                <h3 className="mt-3" style={{ fontWeight: "bold", marginTop: "-7px", height: "30px", overflow:"hidden" }}>{item.memberName}</h3>
                <p style={{ fontWeight: "bold", marginTop: "-7px" }}>{item.memberRole}</p>
                <p style={{ fontWeight: "bold", marginTop: "-7px", height: "60px", overflow:"hidden" }}>
                  {/* Short description will be here from the founder. */}
            {/* {item.memberDetail}
                </p>
                <button className="buttonReverse">Learn More</button>
              </div> */}
            {/* </List.Item> */}
            {/* )} */}
            {/* /> */}
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
      <GoTOTop />
    </div>
  );
};
export default OurTeam;
