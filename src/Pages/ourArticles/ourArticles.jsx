import React from "react";
import { Container } from "react-bootstrap";
import news1 from "../../assests/news1.jpg";
import penpaper from "../../assests/penpaper.jpg";
import news2 from "../../assests/news2.jpg";
import "../../Pages/style.css";
import GoTOTop from "../goToTop";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { List, Card } from "antd";
import { server } from "../../utils/fetch";
import { useDispatch } from "react-redux";
import { pushArticlesReaderPage } from "../../store/readerStore/readerStore.action";
import draftToHtml from "draftjs-to-html";

const OurArticles = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ourArticlesSection = useSelector(
    (state) => state.eventStore.ourArticlesSection
  );
  const ourArticlesPageHeading = useSelector(
    (state) => state.eventStore.ourArticlesPageHeading
  );
  return (
    <div>
      <div
        className="articleBanner"
        style={{
          backgroundImage: `url(${
            ourArticlesPageHeading ? ourArticlesPageHeading.image : null
          })`,
        }}
      >
        <Container>
          <div className="headerinfo col-md-12 col-sm-12">
            <h2 style={{ fontWeight: "bold", color: "white" }}>
              {ourArticlesPageHeading
                ? ourArticlesPageHeading.pageHeading
                : null}

              {/* Latest Activities          */}
            </h2>
            <p style={{ color: "white" }}>
              {ourArticlesPageHeading
                ? ourArticlesPageHeading.pageSubHeading
                : null}

              {/* We are a social unit with community such as norms. */}
            </p>
          </div>
        </Container>
      </div>
      <Container style={{ padding: "0px" }}>
        <div
          className="col-12 normalPagination"
          style={{ marginTop: "50px", padding: "0px" }}
        >
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 3,
            }}
            pagination={{
              onChange: (page) => {
                window.scrollTo(0, 0);
                console.log(page);
              },
              pageSize: 6,
              position: "bottom",
            }}
            dataSource={ourArticlesSection ? ourArticlesSection : []}
            renderItem={(item) => (
              <List.Item>
                <div
                  className="card p-2  shadow-lg"
                  style={{
                    width: "22rem",
                    margin: "auto",
                    marginLeft: "auto !important",
                  }}
                >
                  <div style={{backgroundImage:`url(${server}/${item.image})`
                  , height:"230px",backgroundPosition:"center center",
                   backgroundSize:"cover", backgroundRepeat:"no-repeat" }}></div>
                  {/* <img
                    src={`${server}/${item.image}`}
                    style={{ height: "230px" }}
                  /> */}
                  <div className="card-body  " style={{ padding: "0rem" }}>
                    <div className="col-12">
                      <div className="row pt-3">
                        <div className="col-2 ">
                          <h5
                            style={{
                              width: "2rem",
                              background: "#f6b745",
                              textAlign: "center",
                            }}
                          >
                            <b>
                              {new Date(item.date).toString().split(" ")[2]}
                            </b>{" "}
                            <span style={{ fontSize: "15px" }}>
                              {new Date(item.date).toString().split(" ")[1]}
                            </span>
                            <br />
                          </h5>
                        </div>
                        <div
                          className="col-10 "
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexDirection: "column",
                            alignItems: "start",
                            padding: "20px",
                          }}
                        >
                          <div style={{ overflow: "hidden", height: "150px" }}>
                            <h3
                              style={{
                                marginBottom: "7px",
                                overflow: "hidden",
                                paddingBottom:"2px"
                              }}
                              className="headingElipsis"
                            >
                              {item.title}
                              {/* World runs out of time{" "} */}
                            </h3>
                            <p
                              style={{
                                fontSize: "16px",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                marginBottom: "20px",
                              }}
                              className="contentElipsis"
                            >
                              {draftToHtml(JSON.parse(item.detail)).replace(
                                /(<([^>]+)>)/gi,
                                ""
                              )}
                              {/* {item.detail} */}
                              {/* proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus... */}
                            </p>
                          </div>

                          <button
                            onClick={() => {
                              dispatch(pushArticlesReaderPage(item.id));
                              return history.push(
                                `/event/article-post/${item.id}`
                              );
                            }}
                            style={{ marginTop: "-10px" }}
                            className="buttonNormal"
                          >
                            {item.buttonName}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          />
          {/* <div className="row" style={{display:"flex", justifyContent:"center"}}>
            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start  ">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start  ">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card p-2 ml-2 shadow-lg"
              style={{ width: "22rem", margin: "5px" }}
            >
              <img src={news2} />
              <div className="card-body  " style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-2 ">
                      <h5
                        style={{
                          width: "2rem",
                          background: "#f6b745",
                          textAlign: "center",
                        }}
                      >
                        <b>10</b> <span style={{ fontSize: "15px" }}>Aug </span>
                        <br />
                      </h5>
                    </div>
                    <div className="col-10 d-flex justify-content-start  ">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/article-post')} style={{marginTop:"-10px"}}  className="buttonNormal">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* 
          <div className="d-flex justify-content-center mt-5">
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
                        style={{ background: "#f6b745", color: "#000000" }}
                      >
                        1 <span className="sr-only ">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className="ml-2 mr-2">
                      <MDBPageNav
                        style={{ background: "#f6b745", color: "#000000" }}
                      >
                        2
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem className=" mr-2">
                      <MDBPageNav
                        style={{ background: "#f6b745", color: "#000000" }}
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
              </MDBRow>
              </div> */}
        </div>
      </Container>
      <GoTOTop />
    </div>
  );
};

export default OurArticles;
