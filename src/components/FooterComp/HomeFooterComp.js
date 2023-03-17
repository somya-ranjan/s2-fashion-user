import React from 'react'
import '../../style/style.css'

function HomeFooterComp() {
  return (
      <>
        <div className='home_footer_comp_section'>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-lg-3 colm_1">
                        <img src="./media/logo.png" alt=""/>
                        <h4>ADDRESS : <span>28 White tower, Street Name New York City, USA</span></h4>
                        <h4>TELEPHONE : <span>+91 987 654 3210</span></h4>
                        <h4>EMAIL : <span>yourmain@gmail.com</span></h4>
                    </div>
                    <div className="col-lg-2 colm_2">
                        <h2>Menu</h2>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Testimonial</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 colm_3">
                        <h2>Account</h2>
                        <ul>
                            <li>Account</li>
                            <li>Checkout</li>
                            <li>Login</li>
                            <li>Register</li>
                            <li>Shopping</li>
                            <li>Widget</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 colm_4">
                        <h2>Newsletter</h2>
                        <p>Subscribe by our newsletter and get update protidin.</p>
                        <input type="text" /> 
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="home_footer_comp_copy_section">
            <h4>&copy; 2022 All Rights Reserved By <span>Somyaranjan</span></h4>
        </div>
      </>
  )
}

export default HomeFooterComp
