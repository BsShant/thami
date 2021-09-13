import React from "react";
import { Container } from "react-bootstrap";
import munamadan from "../assests/munamadan.jpg";
import palpasa from "../assests/palpasa.jpg";
import firfire from "../assests/firfire.jpg";
import setodharti from "../assests/setodharti.jpg";
import karnalibluz from "../assests/karnalibluz.jpg";
import gulabiumer from "../assests/gulabiumer.jpg";
import { Pagination } from "react-bootstrap";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";
const PubliciationCard2 = () => {
  return (
    <React.Fragment>
      <div className="text-center mt-5">
        <p style={{ fontSize: "22px", color: "#f6b745", fontWeight: "bold" }}>
          Our Books
        </p>
        <p style={{ fontSize: "20px", marginTop: "-4px" }}>
          We are a social unit with commonality such as norms.
        </p>
        <div>
          <Container>
            <div className="row mt-5">
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Muna Madan
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Palpasa Cafe
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Firfire
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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

            <div className="row mt-5">
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Karnali Bluj
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Seto Dharti
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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
              <div className="col-4">
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
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Gulabi Umer
                    </p>
                    <p style={{ fontSize: "18px", marginTop: "-5px" }}>
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
    </React.Fragment>
  );
};
export default PubliciationCard2;
