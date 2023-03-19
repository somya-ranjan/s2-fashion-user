import React from "react";
import ContactComp from "../components/FormComp/ContactComp";
import NewArrivalComp from "../components/NewArrivalsComp/NewArrivalComp";

function ContactPage() {
  return (
    <div>
      <h1 className="contact_page_h1">Contact us</h1>
      <ContactComp />
      <NewArrivalComp />
    </div>
  );
}

export default ContactPage;
