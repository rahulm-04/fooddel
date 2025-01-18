import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../Context/StoreContext";

const Placeorder = () => {

   const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className="placeorder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="first-name" />
          <input type="text" placeholder="last-name" />
        </div>
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="street" />
        <div className="multifields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
      <div className='cart-total'>
        <h2>Cart Totals</h2>
        <div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
                 <b>Total</b>
                 <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>
      </div>
    </form>
  );
};

export default Placeorder;
