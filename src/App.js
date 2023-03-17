import React from 'react';
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutUsPage from './Pages/AboutUsPage'
import TestimonialPage from './Pages/TestimonialPage'
import ProductsPage from './Pages/ProductsPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import CartPage from './Pages/CartPage';
import Page404 from './Pages/Page404';
function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/pages/about' element={<AboutUsPage/>}/>
          <Route path='/pages/testimonial' element={<TestimonialPage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/> 
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/> 
          <Route path='*' element={<Page404/>}/> 
      </Routes>
    </>
  )
}

export default App;
