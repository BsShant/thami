import React from "react";
import { Container } from "react-bootstrap";
import support from "../Pages/support.css";
import retailstore from "../assests/retailstore.jpg";
import farm from "../assests/farm.jpeg";
import poultry4 from "../assests/poultry4.jpg";
import bakery from "../assests/bakery.jpg";
import airplane_2 from "../assests/airplane_2.jpg";

const SupportCommunity = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <Container>
            <div className="row container-fluid min-vh-100">
              <h3
                style={{
                  textAlign: "center",
                  color: "#f6b745",
                  fontFamily: "sans-serif",
                  fontStyle: "bold",
                  marginTop: "70px",
                }}
              >
                Support a Community{" "}
              </h3>
              <div className="col-6" style={{}}>
                <img
                  src={retailstore}
                  style={{ width: "580px", height: "400px" }}
                />
              </div>

              <div className="col-6" style={{ fontFamily: "sans-serif" }}>
                <p style={{ fontSize: "55px", fontWeight: "bold" }}>
                  1. Retail Shop
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "40px",
                  }}
                >
                  A retailer or store is a business enterprise whose primary
                  source of selling comes from retailing. Retailing includes all
                  the activities involved in selling of goods or services
                  directly to final consumer for personal, non-business use
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Name : Ram Thami
                </h2>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div style={{ backgroundColor: "#f6b745" }}>
          <Container>
            <div className="row container-fluid min-vh-100">
              <div
                className="col-6"
                style={{ fontFamily: "sans-serif", marginTop: "125px" }}
              >
                <p style={{ fontSize: "55px", fontWeight: "bold" }}>
                  2. Agriculture Farm
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "50px",
                  }}
                >
                  A farm (also called an agricultural holding) is an area of
                  land that is devoted primarily to agricultural processes with
                  the primary objective of producing food and other crops; it is
                  the basic facility in food production.
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Name : Ram Thami
                </h2>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>

              <div className="col-6">
                <img
                  src={farm}
                  style={{
                    width: "630px",
                    height: "430px",
                    marginTop: "125px",
                  }}
                />
              </div>
            </div>
          </Container>
        </div>

        <div>
          <Container>
            <div className="row container-fluid min-vh-100">
              <div className="col-6" style={{ marginTop: "125px" }}>
                <img
                  src={poultry4}
                  style={{ width: "580px", height: "400px" }}
                />
              </div>

              <div
                className="col-6"
                style={{ fontFamily: "sans-serif", marginTop: "125px" }}
              >
                <p style={{ fontSize: "55px", fontWeight: "bold" }}>
                  3. Poultry Farm
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "40px",
                  }}
                >
                  Poultry farming, raising of birds domestically or
                  commercially, primarily for meat and eggs but also for
                  feathers. Chickens, turkeys, ducks, and geese are of primary
                  importance, while guinea fowl and squabs (young pigeons) are
                  chiefly of local interest.
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Name : Ram Thami
                </h2>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div style={{ backgroundColor: "#f6b745" }}>
          <Container>
            <div className="row container-fluid min-vh-100">
              <div
                className="col-6"
                style={{ fontFamily: "sans-serif", marginTop: "125px" }}
              >
                <p style={{ fontSize: "55px", fontWeight: "bold" }}>
                  4. Bakery Shop
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "50px",
                  }}
                >
                  Bakery and baked goods categories like bars, breads (bagels,
                  buns, rolls, biscuits and loaf breads), cookies, desserts
                  (cakes, cheesecakes and pies), muffins, pizza, snack cakes,
                  sweet goods (doughnuts, Danish, sweet rolls, cinnamon rolls
                  and coffee cake) and tortillas.
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Name : Ram Thami
                </h2>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>

              <div className="col-6">
                <img
                  src={bakery}
                  style={{
                    width: "630px",
                    height: "430px",
                    marginTop: "125px",
                  }}
                />
              </div>
            </div>
          </Container>
        </div>

        <div>
          <Container>
            <div className="row container-fluid min-vh-100">
              <div className="col-6" style={{ marginTop: "125px" }}>
                <img
                  src={airplane_2}
                  style={{ width: "570px", height: "450px" }}
                />
              </div>

              <div
                className="col-6"
                style={{ fontFamily: "sans-serif", marginTop: "125px" }}
              >
                <p style={{ fontSize: "55px", fontWeight: "bold" }}>
                  5. Travel Agency
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    marginBottom: "40px",
                  }}
                >
                  Planning and selling transportations, accommodations,
                  insurance and other travel services. Cooperating with clients
                  to determine their needs and advising them appropriate
                  destination, modes of transportations, travel dates, costs and
                  accommodations.
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Name : Ram Thami
                </h2>
                <p style={{ fontSize: "30px" }}>
                  Koteshwor, Kathmandu, Nepal <br /> +977 9812345678
                </p>
              </div>
            </div>
          </Container>
        </div>

        <div className="pagination">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="pages">
                  <li>
                    <a href="/booklist" style={{ textDecoration: "none" }}>
                      First
                    </a>
                  </li>
                  <li>
                    <a href="/booklist" style={{ textDecoration: "none" }}>
                      Previous
                    </a>
                  </li>
                  <li>
                    <a href="/booklist" style={{ textDecoration: "none" }}>
                      1
                    </a>
                  </li>
                  <li className="#">
                    <a href="#" style={{ textDecoration: "none" }}>
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      3
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ textDecoration: "none" }}>
                      4
                    </a>
                  </li>
                  <li>
                    <a href="/booklist" style={{ textDecoration: "none" }}>
                      Next
                    </a>
                  </li>
                  <li>
                    <a href="/booklist" style={{ textDecoration: "none" }}>
                      Last
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SupportCommunity;
