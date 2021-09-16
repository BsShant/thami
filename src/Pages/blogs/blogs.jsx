import React from 'react';
import { Container } from "react-bootstrap";
import news1 from "../../assests/news1.jpg";
import penpaper from "../../assests/penpaper.jpg";
import news2 from "../../assests/news2.jpg";
import "../../Pages/style.css";
import GoToTop from '../goToTop';
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const Blogs = ()=>{
const history = useHistory()
    return(
        <div>
          <div className="blogBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Latest Blog           </h2>
<p style={{color:"white"}}>
          We are a social unit with community such as norms.
        </p>
               
              </div>    
              </Container>
              </div>  
            <Container >
      

        <div className="col-12" style={{marginTop:"50px"}}>
          <div className="row" style={{display:"flex", justifyContent:"center"}}>
            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card"
              style={{
                width: "22rem",
                margin: "5px",
                backgroundColor: "#f6b745",
              }}
            >
              <img src={penpaper} />
              <div className="card-body" style={{ padding: "0rem" }}>
                <div className="col-12">
                  <div className="row pt-3">
                    <div className="col-10 d-flex justify-content-start">
                      <h4 style={{}}>
                        World runs out of time{" "}
                        <p style={{ marginBottom: "3rem", fontSize: "18px" }}>
                          proin in nisi pretium, ultrices <br /> massa non,
                          sollicitudin urna.
                          <br />
                          phasellus rutrum luctus...
                        </p>
                        <button onClick={()=>history.push('/event/blog-post')} style={{marginTop:"-10px"}}  className="buttonReverse">Read More</button>

                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </Container>
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
              </div>
<GoToTop />
        </div>
    )
}

export default Blogs;