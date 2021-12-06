import React from "react";
import "../../Pages/style.css";
import { Container } from "react-bootstrap";
import esewa from "../../assests/esewa_logo.png";
import ime from "../../assests/ime-red.png";
import khalti from "../../assests/khalti.jpeg";
import global from "../../assests/global.png";
import GoTOTop from "../goToTop";
import { useSelector } from "react-redux";
import { List, Card } from "antd";
import { server } from "../../utils/fetch";

const OurPartners = () => {
  const ourPartnersSection = useSelector(
    (state) => state.aboutStore.ourPartnersSection
  );
  const ourPartnersHeadingSection = useSelector(
    (state) => state.aboutStore.ourPartnersHeadingSection
  );
  const ourPartnersPageHeading = useSelector(
    (state) => state.aboutStore.ourPartnersPageHeading
  );
  return (
    <div>
      <div
        className="ourPartnersBanner"
        style={{
          backgroundImage: `url(${
            ourPartnersPageHeading ? ourPartnersPageHeading.image : null
          })`,
        }}
      >
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h2 style={{ fontWeight: "bold", color: "white" }}>
              {ourPartnersPageHeading
                ? ourPartnersPageHeading.pageHeading
                : null}
              {/* Our Partners    */}
            </h2>
            <p style={{ color: "white" }}>
              {ourPartnersPageHeading
                ? ourPartnersPageHeading.pageSubHeading
                : null}
              {/* We are a social unit with community such as norms. */}
            </p>
          </div>
        </Container>
      </div>
      <div style={{ padding: "70px 0" }}>
        <Container>
          <div style={{}}>
            <h3
              style={{
                padding: "40px 0 10px 0px",
                margin: "0 0 40px",
                borderBottom: "1px solid grey",
              }}
            >
              {/* Our Partners */}
              {ourPartnersHeadingSection
                ? ourPartnersHeadingSection.topTitle
                : null}
            </h3>
            <h2>
              {ourPartnersHeadingSection
                ? ourPartnersHeadingSection.heading
                : null}
            </h2>
            <p style={{ fontSize: "20px" }}>
              {ourPartnersHeadingSection
                ? ourPartnersHeadingSection.detail
                : null}
            </p>
          </div>
          <div className="row normalPagination">
            <List
              style={{ width: "100%" }}
              grid={{
                gutter: 40,
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
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
              dataSource={ourPartnersSection ? ourPartnersSection : []}
              renderItem={(item) => (
                <List.Item>
                  <div
                    style={{
                      cursor: "pointer",
                      alignItems: "center",
                      display: "flex",
                      flexDirection:'column',
                      justifyContent: "center",
                      marginBottom:'50px',
                      height:'170px'
                    }}
                  >
                    <img
                      src={`${server}/${item.partnerLogo}`}
                      style={{ width: "200px", height:'200px', marginBottom: "30px" }}
                    ></img>
                    <div style={{fontSize:'20px', textTransform:'capitalize'}}>{item.partnerName}</div>
                    <div>{item.address}</div>

                  </div>
                </List.Item>
              )}
            />
            {/* <div className="col-6 col-lg-2 col-md-3 col-sm-4" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={global} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-6 col-lg-2 col-md-3 col-sm-4" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={esewa} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={ime} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={khalti} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={ime} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={khalti} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={global} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={esewa} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={khalti} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={ime} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={esewa} style={{ width: "130px", marginBottom:"30px" }}></img>
</div>


<div className="col-lg-2 col-md-3 col-sm-4 col-6" style={{cursor:"pointer", height: "130px","alignItems": "center",display: "flex", justifyContent:"center"}}>                          <img src={global} style={{ width: "130px", marginBottom:"30px" }}></img>
</div> */}
          </div>
        </Container>
      </div>
      <GoTOTop />
    </div>
  );
};

export default OurPartners;
