import React from 'react';
import HomeComp from '../components/HomeComp/HomeComp';
import WhyUsComp from '../components/WhyUsComp/WhyUsComp';
import NewArrivalComp from '../components/NewArrivalsComp/NewArrivalComp';
import ProductsComp from '../components/ProductsComp/ProductsComp';
import SubscribeComp from '../components/SubscribeComp/SubscribeComp';
import TestimonialComp from '../components/TestimonialComp/TestimonialComp';

function HomePage() {
  return (
    <div>
      <HomeComp />
      <WhyUsComp />
      <NewArrivalComp />
      <ProductsComp />
      <SubscribeComp />
      <TestimonialComp />
    </div>
  );
}

export default HomePage;
