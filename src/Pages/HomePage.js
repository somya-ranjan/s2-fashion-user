import React from 'react'
import NavComp from '../components/NavComp/NavComp';
import HomeComp from '../components/HomeComp/HomeComp';
import WhyUsComp from '../components/WhyUsComp/WhyUsComp';
import NewArrivalComp from '../components/NewArrivalsComp/NewArrivalComp';
import ProductsComp from '../components/ProductsComp/ProductsComp';
import SubscibeComp from '../components/SubscribeComp/SubscibeComp';
import TestimonialComp from '../components/TestmonialComp/TestimonialComp';
import HomeFooterComp from '../components/FooterComp/HomeFooterComp';

function HomePage() {
  return (
    <div>
      <NavComp/>
      <HomeComp/>
      <WhyUsComp/>
      <NewArrivalComp/>
      <ProductsComp/>
      <SubscibeComp/>
      <TestimonialComp/>
      <HomeFooterComp/>
    </div>
  )
}

export default HomePage
