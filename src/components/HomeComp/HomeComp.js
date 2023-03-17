import React from 'react'
import '../../style/style.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HomeComp() {
  return (
    <div className='home_comp_section'>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
              <Slider
                autoplay
                autoplaySpeed={3000}
                dots
                infinite
              >
                <SliderContent/>
                <SliderContent/>
                <SliderContent/>
              </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

const SliderContent=()=>{
  return(
    <div className="carousel">
      <h1>Sale 20% off <span>On Everything</span></h1>
      <p>
        Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. 
      </p>
      <a href="#product">Shop Now</a>
    </div>
  )
}

export default HomeComp
