import React from 'react'
import '../../style/style.css'

function CommonFooterComp() {
  return (
    <div className='common_footer_comp_section'>
    <div className="container">
        <div className="row">
            <div className="col-md-4 col_left">
                <h2>Reach at..</h2>
                <ul>
                    <li><i className="fa-solid fa-location-dot"></i> Location</li>
                    <li><i className="fa-solid fa-phone"></i> Call +011234567890</li>
                    <li><i className="fa-solid fa-envelope"></i> demo@gmail.com</li>
                </ul>
            </div>
            <div className="col-md-5 col_right">
                <h2>Famms</h2>
                <p>
                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with 
                </p>
                <div className="social_media">
                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col common_footer_comp_copy_section">
                <h4>&copy; 2022 All Rights Reserved By <span>Somyaranjan</span></h4>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CommonFooterComp
