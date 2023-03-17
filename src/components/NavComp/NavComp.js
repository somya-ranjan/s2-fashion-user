import React from 'react'
import { NavLink } from 'react-router-dom'
import logoImg from './logo.png'
import { useSelector } from 'react-redux';
import "../../style/style.css"

function NavComp() {
    const cart = useSelector((state) => state);
    let cartLength=cart.length >0 ? cart.length : null
  return (
    <div className='nav_comp_section'>
        <div className="container">
            <div className="row justify-content-evenly align-items-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/">
                                <img src={logoImg} alt=""/>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                        </NavLink>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/pages/about">About</NavLink></li>
                                            <li><NavLink className="dropdown-item" to="/pages/testimonial">Testimonial</NavLink></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/blog">BLOG</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link cart_length" to="/cart">
                                            <i className="fa-solid fa-cart-shopping"><span>{cartLength}</span></i>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="search">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavComp
