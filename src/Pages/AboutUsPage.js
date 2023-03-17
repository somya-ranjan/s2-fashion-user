import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import WhyUsComp from '../components/WhyUsComp/WhyUsComp';
import NewArrivalComp from '../components/NewArrivalsComp/NewArrivalComp';
import CommonFooterComp from '../components/FooterComp/CommonFooterComp';

function AboutUsPage() {
    return (
        <div>
            <NavComp />
            <h1 className='about_page_h1'>About us</h1>
            <WhyUsComp />
            <NewArrivalComp/>
            <CommonFooterComp />
        </div>
    )
}

export default AboutUsPage
