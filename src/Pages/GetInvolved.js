import React from "react";
import Header from "../GetInvolvedComponent/Header";
import Card1 from "../GetInvolvedComponent/Card1";
import Card2 from "../GetInvolvedComponent/Card2";
import Card3 from "../GetInvolvedComponent/Card3";
import Card4 from "../GetInvolvedComponent/Card4";
import "../Pages/style.css";
import GoTOTop from "./goToTop";

const GetInvolved = () => {
  return (
    <React.Fragment>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      {/* <Card4 /> */}
      <GoTOTop />
    </React.Fragment>
  );
};
export default GetInvolved;
