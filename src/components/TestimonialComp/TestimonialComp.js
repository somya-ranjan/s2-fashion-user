import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientImg from '../../assets/images/client.jpg';

function TestimonialComp() {
  return (
    <div className="testimonial_comp_section">
      <h1>Customer&apos;s Testimonial </h1>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <Slider
              autoplay
              autoplaySpeed={2000}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
            >
              <Card />
              <Card />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
const Card = () => (
  <div className="card">
    <img src={clientImg} alt="" />
    <h2>Anna Trevor</h2>
    <h4>Customer</h4>
    <p>
      Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis
      reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad
      labore modi voluptatibus accusantium sapiente nam! Quaerat.
    </p>
  </div>
);

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-arrow-left-long" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i className="fa-solid fa-arrow-right-long" />
    </div>
  );
};

export default TestimonialComp;
