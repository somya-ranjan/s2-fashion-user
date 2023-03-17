import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import ContactComp from '../components/FormComp/ContactComp';
import NewArrivalComp from '../components/NewArrivalsComp/NewArrivalComp';
import CommonFooterComp from '../components/FooterComp/CommonFooterComp';

function ContactPage() {
    return (
        <div>
            <NavComp />
            <h1 className='contact_page_h1'>Contact us</h1>
            <ContactComp/>
            <NewArrivalComp />
            <CommonFooterComp />
        </div>
    )
}

export default ContactPage
