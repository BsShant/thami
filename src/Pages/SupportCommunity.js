import React from "react";
import { Container } from "react-bootstrap";
import support from "../Pages/support.css";
import retailstore from "../assests/retailstore.jpg";
import farm from "../assests/farm.jpeg";
import poultry4 from "../assests/poultry4.jpg";
import bakery from "../assests/bakery.jpg";
import airplane_2 from "../assests/airplane_2.jpg";
import "../Pages/style.css";
import GoTOTop from "./goToTop";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { useSelector } from "react-redux";
import { List, Card } from "antd";
import { server } from "../utils/fetch";
import { isTSEnumMember } from "@babel/types";

const SupportCommunity = () => {
  const supportCommunitySection = useSelector(
    (state) => state.getInvolvedStore.supportCommunitySection
  );
  const supportCommunityPageHeading = useSelector(
    (state) => state.getInvolvedStore.supportCommunityPageHeading
  );
  const supportCommunityHeadingSection = useSelector(
    (state) => state.getInvolvedStore.supportCommunityHeadingSection
  );
  return (
    <React.Fragment>
      <div>
        <div
          className="supportUsBanner"
          style={{
            backgroundImage: `url(${
              supportCommunityPageHeading
                ? supportCommunityPageHeading.image
                : null
            })`,
          }}
        >
          <Container>
            <div className="headerinfo col-md-12 col-sm-12">
              <h2 style={{ fontWeight: "bold", color: "white" }}>
                {supportCommunityPageHeading
                  ? supportCommunityPageHeading.pageHeading
                  : null}
                {/* Call for support     */}
              </h2>
              <p style={{ color: "white" }}>
                {supportCommunityPageHeading
                  ? supportCommunityPageHeading.pageSubHeading
                  : null}
              </p>
            </div>
          </Container>
        </div>
        <div style={{}}>
          <div className="text-center" style={{ padding: "50px 0px 0px" }}>
            <h3 style={{ color: "#f6b745" }}>
              {/* Support a community */}
              {supportCommunityHeadingSection
                ? supportCommunityHeadingSection.topTitle
                : null}
            </h3>
            <h2>
              {supportCommunityHeadingSection
                ? supportCommunityHeadingSection.heading
                : null}
            </h2>
            <p>
              {supportCommunityHeadingSection
                ? supportCommunityHeadingSection.detail
                : null}
            </p>
          </div>
        </div>
        <div className="reversePagination">
          <List
            pagination={{
              onChange: (page) => {
                window.scrollTo(0, 0);
                console.log(page);
              },
              pageSize: 9,
              position: "bottom",
            }}
            dataSource={
              supportCommunitySection
                ? supportCommunitySection.sort((a, b) => a.sn - b.sn)
                : []
            }
            renderItem={(item) => (
              <List.Item>
                <div
                  style={{
                    padding: "0",
                    minHeight: "100vh",
                    width: "100%",
                    backgroundColor: `${
                      item.sn % 2 === 0 ? "#f6b745" : "white"
                    }`,
                  }}
                >
                  {/* <div className="container">  */}
                  <Container>
                    <div
                      className="row section"
                      style={{ marginTop: "50px", padding: "0px 20px" }}
                    >
                      <div
                        className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        style={{ marginBottom: "30px" }}
                      >
                        <div style={{backgroundImage:`url(${server}/${item.image})`
              , backgroundSize:'cover'
              , backgroundPosition:'center', backgroundRepeat:'no-repeat', width:'100%', height:'100%', minHeight:'400px'}}>

              </div>
                        {/* <img
                          src={`${server}/${item.image}`}
                          style={{ width: "100%", height: "400px" }}
                        /> */}
                      </div>

                      <div
                        className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                        style={{ marginTop: "60px" }}
                      >
                        <h2 style={{ fontWeight: "bold" }}>
                          {item.sn}. {item.heading}
                        </h2>
                        <p
                          style={{
                            marginBottom: "40px",
                          }}
                        >
                          {item.detail}
                          {/* A retailer or store is a business enterprise whose primary
    source of selling comes from retailing. Retailing includes all
    the activities involved in selling of goods or services
    directly to final consumer for personal, non-business use */}
                        </p>
                        <h3 style={{ fontWeight: "bold" }}>
                          Name : {item.name}
                        </h3>
                        <p style={{ fontSize: "30px" }}>
                          {item.address} <br /> {item.phone}
                        </p>
                      </div>
                    </div>
                    {/* </div> */}
                  </Container>
                </div>
              </List.Item>
            )}
          />
        </div>
        {/* <div> */}
        {/* <Container>
              
            <div className="row section">

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom:"30px"}}>
                <img
                  src={retailstore}
                  style={{ width: "100%", height: "400px" }}
                />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{marginTop:"30px"}}>
                <h2 style={{ fontWeight: "bold" }}>
                  1. Retail Shop
                </h2>
                <p
                  style={{
                    
                    marginBottom: "40px",
                  }}
                >
                  A retailer or store is a business enterprise whose primary
                  source of selling comes from retailing. Retailing includes all
                  the activities involved in selling of goods or services
                  directly to final consumer for personal, non-business use
                </p>
                <h3 style={{ fontWeight: "bold" }}>
                  Name : Ram Thami
                </h3>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div style={{ backgroundColor: "#f6b745" }}>
          <Container>
            <div className="row section">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                style={{ margin: "30px 0" }}
              >
                <h2 style={{  fontWeight: "bold" }}>
                  2. Agriculture Farm
                </h2>
                <p
                  style={{
                    
                    fontWeight: "bold",
                    marginBottom: "30px",
                  }}
                >
                  A farm (also called an agricultural holding) is an area of
                  land that is devoted primarily to agricultural processes with
                  the primary objective of producing food and other crops; it is
                  the basic facility in food production.
                </p>
                <h3 style={{  fontWeight: "bold" }}>
                  Name : Ram Thami
                </h3>
                <p style={{ }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src={farm}
                  style={{
                    width: "100%",
                    height: "430px",
                   
                  }}
                />
              </div>
            </div>
          </Container>
        </div>

        <div>
          <Container>
            <div className="row section">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "30px" }}>
                <img
                  src={poultry4}
                  style={{ width: "100%", height: "400px" }}
                />
              </div>

              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
                <h2 style={{ fontWeight: "bold" }}>
                  3. Poultry Farm
                </h2>
                <p
                  style={{
                    
                    marginBottom: "40px",
                  }}
                >
                  Poultry farming, raising of birds domestically or
                  commercially, primarily for meat and eggs but also for
                  feathers. Chickens, turkeys, ducks, and geese are of primary
                  importance, while guinea fowl and squabs (young pigeons) are
                  chiefly of local interest.
                </p>
                <h3 style={{  fontWeight: "bold" }}>
                  Name : Ram Thami
                </h3>
                <p style={{ }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div style={{ backgroundColor: "#f6b745" }}>
          <Container>
            <div className="row section">
              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                style={{ margin: "30px 0" }}
              >
                <h2 style={{ fontSize: "55px", fontWeight: "bold" }}>
                  4. Bakery Shop
                </h2>
                <p
                  style={{
                   
                    marginBottom: "50px",
                  }}
                >
                  Bakery and baked goods categories like bars, breads (bagels,
                  buns, rolls, biscuits and loaf breads), cookies, desserts
                  (cakes, cheesecakes and pies), muffins, pizza, snack cakes,
                  sweet goods (doughnuts, Danish, sweet rolls, cinnamon rolls
                  and coffee cake) and tortillas.
                </p>
                <h3 style={{  fontWeight: "bold" }}>
                  Name : Ram Thami
                </h3>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <img
                  src={bakery}
                  style={{
                    width: "100%",
                    height: "430px",
                  }}
                />
              </div>
            </div>
          </Container>
        </div>

        <div>
          <Container>
            <div className="row section">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ marginBottom: "30px" }}>
                <img
                  src={airplane_2}
                  style={{ width: "100%", height: "450px" }}
                />
              </div>

              <div
                className="col-lg-6 col-md-12 col-sm-12 col-xs-12"
                style={{ marginTop: "30px" }}
              >
                <h2 style={{ fontWeight: "bold" }}>
                  5. Travel Agency
                </h2>
                <p
                  style={{
                    
                    marginBottom: "40px",
                  }}
                >
                  Planning and selling transportations, accommodations,
                  insurance and other travel services. Cooperating with clients
                  to determine their needs and advising them appropriate
                  destination, modes of transportations, travel dates, costs and
                  accommodations.
                </p>
                <h3 style={{ fontWeight: "bold" }}>
                  Name : Ram Thami
                </h3>
                <p style={{}}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div> */}

        {/* <div className="d-flex justify-content-center mt-5">
              <MDBRow>
                <MDBCol>
                  <MDBPagination className="mb-5">
                    <MDBPageItem disabled>
                      <MDBPageNav
                        aria-label="Previous"
                        className="ml-2 mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Previous</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        1 <span className="sr-only ">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className="ml-2 mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        2
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className=" mr-2">
                      <MDBPageNav
                        style={{ background: "#ffffff", color: "#000000" }}
                      >
                        3
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                      <MDBPageNav
                        aria-label="Previous"
                        className=" mr-2"
                        style={{ background: "#000000", color: "#f6b745" }}
                      >
                        <span aria-hidden="true">Next</span>
                      </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>
                </MDBCol>
              </MDBRow> */}
        {/* <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination> */}
        {/* </div> */}
      </div>
      <GoTOTop />
    </React.Fragment>
  );
};
export default SupportCommunity;
