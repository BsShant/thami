import React from 'react';
import { Container } from "react-bootstrap";
import publicationResource from "../../assests/publicationResource.jpg";
import airparticles from "../../assests/airparticles.jpg";
import airparticle2 from "../../assests/airparticle2.jpg";
import airpolution from "../../assests/airpolution.jpg";
import gralcier from "../../assests/gralcier.jpg";
import landpolutation from "../../assests/landpolutation.jpg";
import { Link } from "react-router-dom";
import GoTOTop from '../goToTop';
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

const Resources = ()=>{

    return(
        <div>
          <div className="resourcesBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 We publish lots of resources        </h2>

               
              </div>    
              </Container>
              </div> 
              <div className="text-center pt-5" style={{ background: "#f6b745" }}>
        <h3 style={{ marginBottom:"30px" }}>Our Resources</h3>
        <h2 style={{ }}>Enviromental Studies</h2>
        <p style={{ margin: "-4px 0 50px 0" }}>
          We are a social unit with commonality such as norms.
        </p>
        <div>
          <Container>
            <div className="row mt-5">
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={publicationResource}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={airparticles}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                   
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={airparticle2}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                   
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={airpolution}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt">
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                      The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                       
                    </p>
                    
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={gralcier}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 article-margin" style={{marginBotton:"30px"}}>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <img
                      src={landpolutation}
                      style={{ height: "200px", width: "100%" }}
                    ></img>
                  </div>
                  <div className="col-12 col-sm-6 text-left align-middle articleExerpt" >
                    <h3 style={{ fontWeight: "bold" }}>
                      Air Particles and Air Quality
                    </h3>
                    <p
                      style={{}} className="bookWriter"
                    >
                       The air we breath has a lot to do with our health. As we
                      breath in fresh air...
                    </p>
                    
                      <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
                  </div>
                </div>
              </div>
              
            </div>
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
              </MDBRow>
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
            </div>
          </Container>
        </div>
      </div>
      <GoTOTop />
              </div>
    )}

    export default Resources;