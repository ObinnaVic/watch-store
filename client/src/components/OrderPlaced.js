import React from 'react';
import { Link } from 'react-router-dom';
import greenTick from '../img/greenTick.gif';

const OrderPlaced = () => {
    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">Cart</h1>
        </div>
        <div className="text-center bg-dark text-danger m-2 m-lg-5 p-4">
          <img src={greenTick} style={{ width: "10%" }} alt="tick" />
          <h1>
            THANKS FOR YOUR <br /> ORDER!!
          </h1>
          <p className="text-light">
            Your order is accepted. A customer guide would contact you shortly
            for more details.
          </p>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <Link to="/shop">
            <button className="btn border-dark bg-danger">Go to Shop</button>
          </Link>
        </div>
      </div>
    );
}

export default OrderPlaced;