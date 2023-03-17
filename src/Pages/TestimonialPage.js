import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import TestimonialComp from '../components/TestmonialComp/TestimonialComp';
import CommonFooterComp from '../components/FooterComp/CommonFooterComp';

function TestimonialPage() {
    return (
        <div>
            <NavComp />
            <h1 className='testimonial_page_h1'>Testimonial</h1>
            <TestimonialComp />
            <CommonFooterComp/>
        </div>
    )
}

export default TestimonialPage
