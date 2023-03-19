import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import TestimonialPage from './Pages/TestimonialPage';
import ProductsPage from './Pages/ProductsPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import CartPage from './Pages/CartPage';
import Page404 from './Pages/Page404';
import NavComp from './components/NavComp/NavComp';
import CommonFooterComp from './components/FooterComp/CommonFooterComp';
import HomeFooterComp from './components/FooterComp/HomeFooterComp';
import './style/style.scss';
function App() {
  const { pathname, key } = useLocation();
  const loc = useLocation();
  console.log(loc, 'location');
  return (
    <>
      <NavComp />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about" element={<AboutUsPage />} />
        <Route path="/pages/testimonial" element={<TestimonialPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {pathname === '/' ? (
        <HomeFooterComp />
      ) : key === 'default' || pathname === '/search' ? null : (
        <CommonFooterComp />
      )}
    </>
  );
}

export default App;
