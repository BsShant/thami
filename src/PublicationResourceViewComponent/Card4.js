import React from "react";
import aboutcard5 from "../assests/airpolution.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card4 = () => {
  return (
    <React.Fragment>
      <div className="text-center" style={{margin:"120px 0 50px"}}>
        <h2>Recent Works Resource</h2>
      </div>
      <div>
      <Container>
            <div className="row" style={{marginBottom:"120px"}}>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
              <div className="col-md-6 col-lg-3 col-sm-12 col-xs-12 p-4 p-4">
                <img src={aboutcard5} style={{ width: "100%" }}></img>
                <h3 className="mt-3">                      Air Particles and Air Quality
</h3>
                <p style={{  marginTop: "10px 0"}}>
                The air we breath has a lot to do with our health. As we
                      breath in fresh air, our lungs absorb oxygen from the air
                      and pass it into our blood steam.                       </p>
                <Link
                        to={"/resourcepreview"}
                        className="newsButton"

                      >
                        Learn More
                      </Link>
              </div>
            </div>
          </Container>
      </div>
    </React.Fragment>
  );
};
export default Card4;
