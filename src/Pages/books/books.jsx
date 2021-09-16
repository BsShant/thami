import React from 'react';
import { Container } from "react-bootstrap";
import news1 from "../../assests/news1.jpg";
import penpaper from "../../assests/penpaper.jpg";
import news2 from "../../assests/news2.jpg";
import "../../Pages/style.css";
import munamadan from "../../assests/munamadan.jpg";
import palpasa from "../../assests/palpasa.jpg";
import firfire from "../../assests/firfire.jpg";
import setodharti from "../../assests/setodharti.jpg";
import karnalibluz from "../../assests/karnalibluz.jpg";
import gulabiumer from "../../assests/gulabiumer.jpg";
import { Pagination } from "react-bootstrap";
import GoToTop from '../goToTop';

import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";

const Books = ()=>{

    return(
        <div>
          <div className="booksBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 We have collection of Books         </h2>

               
              </div>    
              </Container>
              </div> 
              <div className="text-center mt-5">
        <h3 style={{color: "#f6b745", fontWeight: "bold" }}>
          Our Books
        </h3>
        <p style={{ margin: "-4px 0 30px 0" }}>
          We are a social unit with commonality such as norms.
        </p>
        <div>
          <Container>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={munamadan}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{ fontWeight: "bold" }}>
                      Muna Madan
                    </h3>
                    <p style={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={palpasa}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{ fontWeight: "bold" }}>
                      Palpasa Cafe
                    </h3>
                    <p sstyle={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={firfire}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{  fontWeight: "bold" }}>
                      Firfire
                    </h3>
                    <p style={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={karnalibluz}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{fontWeight: "bold" }}>
                      Karnali Bluj
                    </h3>
                    <p style={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={setodharti}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{ fontWeight: "bold" }}>
                      Seto Dharti
                    </h3>
                    <p style={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" style={{marginBottom:"30px"}}>
                <div className="row">
                  <div className="col-7">
                    <div
                      style={{
                        background: "#f6b745",
                        height: "200px",
                        width: "90%",
                        padding: "20px",
                      }}
                    >
                      <img
                        src={gulabiumer}
                        style={{ height: "160px", width: "80%" }}
                      ></img>
                    </div>
                  </div>
                  <div className="col-5 text-left align-middle">
                    <h3 style={{ fontWeight: "bold" }}>
                      Gulabi Umer
                    </h3>
                    <p style={{}} className="bookWriter">
                      By LPD <br />
                      PRINT BOOK
                    </p>
                    <button
                      style={{
                        border: "none",
                        background: "#f6b745",
                        fontSize: "16px",
                        paddingLeft: "10px",
                        fontWeight: "bold",
                        paddingRight: "10px",
                      }}
                    >
                      Download
                    </button>
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
      <GoToTop />
              </div>
    )}

    export default Books;