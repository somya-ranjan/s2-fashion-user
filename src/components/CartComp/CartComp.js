import React from "react";

function CartComp() {
  return (
    <div className="cart_comp_section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {[1, 2, 3].length < 1 ? (
            <h1>Cart Is Empty</h1>
          ) : (
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
              {[1, 2, 3].map((item) => {
                console.log(item);
                return (
                  <div
                    className="row justify-content-center align-items-center cart_items"
                    key={item.id}>
                    <div className="col-4 product_name">
                      <img src={item.img} alt="cart_img" />
                      <div className="details">
                        <h4>{item.name}</h4>
                        <span> remove</span>
                      </div>
                    </div>
                    <div className="col-2 price">
                      <h4>${item.price}</h4>
                    </div>
                    <div className="col-2 quantity">
                      <span className="remove">-</span>
                      <h4>{item.quantity}</h4>
                      <span>+</span>
                    </div>
                    <div className="col-3 total">
                      <h4>${item.price * item.quantity}</h4>
                    </div>
                  </div>
                );
              })}
              <div className="col sub_total">
                {[1, 2] > 0 && (
                  <h2>
                    <span>Subtotal : </span>${"total"}
                  </h2>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartComp;
