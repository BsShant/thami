import React from "react";
import { Container } from "react-bootstrap";
import support from "../Pages/support.css";
import retailstore from "../assests/retailstore.jpg";
import farm from "../assests/farm.jpeg";
import poultry4 from "../assests/poultry4.jpg";
import bakery from "../assests/bakery.jpg";
import airplane_2 from "../assests/airplane_2.jpg";
import "../Pages/style.css";


const SupportCommunity = () => {
  return (
    <React.Fragment>
      <div>
      <div className="supportUsBanner">
<Container>
<div className="headerinfo col-md-12 col-sm-12">
                <h2
                  style={{ fontWeight: "bold", color:"white" }}
                >
 Call for support     </h2>

               
              </div>    
              </Container>
              </div> 
              <div style={{ }}>
        <div className="text-center" style={{ padding: "50px" }}>
          <h3 style={{color:"#f6b745"}}>Support a community</h3>
        </div>
          <Container>
              
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
