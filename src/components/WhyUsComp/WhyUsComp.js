import React from "react";
import WhyUsCompApi from "./WhyUsCompApi";

function WhyUsComp() {
  return (
    <div className="whyUsSection">
      <h1>Why Shop With Us</h1>
      <div className="container">
        <div className="row justify-content-evenly align-items-center">
          {WhyUsCompApi.map((card) => {
            const { id, icon, heading, descripation } = card;
            return (
              <div className="col-md-3 card" key={id}>
                <i className={`${icon}`}></i>
                <h2>{heading}</h2>
                <p>{descripation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhyUsComp;
