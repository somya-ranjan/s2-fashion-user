import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import WhyUsComp from '../components/WhyUsComp/WhyUsComp';
import CommonFooterComp from '../components/FooterComp/CommonFooterComp';

function BlogPage() {
    return (
        <div>
            <NavComp />
            <h1 className='blog_page_h1'>Blog List</h1>
            <WhyUsComp />
            <CommonFooterComp />
        </div>
    )
}

export default BlogPage
