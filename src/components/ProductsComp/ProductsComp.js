import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ProductsCompApi from './ProductsCompApi';
import { useSelector, useDispatch } from "react-redux";
import '../../style/style.css'

function ProductsComp() {
  const [producrApi, setProducrApi] = useState(ProductsCompApi);
  const dispatch = useDispatch();

  return (
    <div className='products_comp_section'>
      <h1 id='product'>Our <span> Products</span></h1>
      <div className="container">
          <div className="row justify-content-evenly align-items-center">
            {
              producrApi.map((product)=>{
                const {id,img,name,price}=product
                product.quantity = 1;
                return(
                  <div className="col-md-3 product_card" key={id}>
                    <img src={img} alt=""/>
                    <div className="ditels" key={id+1}>
                        <h3>{name}</h3>
                        <h3>${price}</h3>
                    </div>
                    <div className="layer" key={id-1}>
                        <div className="btn">
                            <button onClick={() => dispatch({ type: "ADD", payload: product })}>
                              Add To Cart
                            </button>
                            <button onClick={() => dispatch({ type: "ADD", payload: product })}>
                              By Now
                            </button>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>
      <NavLink to='/products' className='allProductsBtn'>View All products</NavLink>
    </div>
  )
}

export default ProductsComp
