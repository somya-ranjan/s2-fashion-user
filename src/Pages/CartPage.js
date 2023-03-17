import React from 'react'
import NavComp from '../components/NavComp/NavComp'
import CartComp from '../components/CartComp/CartComp'
import CommonFooterComp from '../components/FooterComp/CommonFooterComp'
import '../style/style.css'

function CartPage() {
  return (
    <>
        <NavComp/>
          <h1 className='cart_page_h1'>Cart List</h1>
        <CartComp/>
        <CommonFooterComp/>
    </>
  )
}

export default CartPage
