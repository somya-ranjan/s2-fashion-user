import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../../style/style.css'

function CartComp() {
  const cart = useSelector((state) => state);
  const dispatch = useDispatch();
  const addition = (acc, currentvalue) => {
    return acc + currentvalue.price * currentvalue.quantity;
  };
  const total = cart.reduce(addition, 0);
  return (
    <div className='cart_comp_section'>
      <div className="container">
          <div className="row justify-content-center align-items-center">
            {
              cart.length < 1? <h1>Cart Is Empty</h1> :
              <div className="col">
                <div className="row justify-content-center align-items-center titles">
                  <div className="col-4 product_title">
                    <h3>Product</h3>
                  </div>
                  <div className="col-2 price">
                    <h3>Price</h3>
                  </div>
                  <div className="col-2 quantity">
                    <h3>Quantity</h3>
                  </div>
                    <div className="col-3 total">
                  <h3>Total</h3>
                  </div>
                </div>
                {cart.map((item) => {
                  console.log(item)
                    return (
                      <div className="row justify-content-center align-items-center cart_items" key={item.id}>
                        <div className='col-4 product_name'>
                            <img src={item.img} alt="cart_img" />
                          <div className="ditels">
                            <h4>{item.name}</h4>
                            <span onClick={() => dispatch({ type: "REMOVE", payload: item })}> remove</span>
                          </div>
                        </div>
                        <div className="col-2 price">
                          <h4>${item.price}</h4>
                        </div>
                        <div className="col-2 quantity">
                          <span className='remove'
                            onClick={() => {  (item.quantity > 1) ?  dispatch({ type: "DECREASE", payload: item }) :
                            dispatch({ type: "REMOVE", payload: item });
                            }}> 
                            -
                          </span>
                          <h4>{item.quantity}</h4>
                          <span 
                              onClick={() => dispatch({ type: "INCREASE", payload: item })}> 
                              + 
                          </span>
                        </div>
                        <div className="col-3 total">
                          <h4>${item.price * item.quantity}</h4>
                        </div>
                      </div>
                    );
                })}
                <div className="col sub_total">
                  {total > 0 && <h2><span>Subtotal : </span>${total}</h2>}
                </div>
              </div>
            }
          </div>
      </div>
    </div>
  )
}

export default CartComp
