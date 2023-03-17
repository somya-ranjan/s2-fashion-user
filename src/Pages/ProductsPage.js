import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import AllProductComps from '../components/ProductsComp/AllProductComps';
import CommonFooterComp from '../components/FooterComp/CommonFooterComp';

function ProductsPage() {
    return (
        <div>
            <NavComp />
            <h1 className='product_page_h1'>Product Grid</h1>
            <AllProductComps />
            <CommonFooterComp />
        </div>
    )
}

export default ProductsPage
