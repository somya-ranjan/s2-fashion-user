import React from "react";
import WhyUsComp from "../components/WhyUsComp/WhyUsComp";
import NewArrivalComp from "../components/NewArrivalsComp/NewArrivalComp";

function AboutUsPage() {
  return (
    <div>
      <h1 className="about_page_h1">About us</h1>
      <WhyUsComp />
      <NewArrivalComp />
    </div>
  );
}

export default AboutUsPage;
