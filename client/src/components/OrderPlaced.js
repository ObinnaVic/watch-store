import React from 'react';
import { Link } from 'react-router-dom';
import greenTick from '../img/greenTick.gif';
import loader from "../img/loader.gif";
import { useGlobalContext } from "./context";


const OrderPlaced = () => {
  const {transactionHash, paymentLoader} = useGlobalContext();

  
    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">Cart</h1>
        </div>
        <div className="text-center bg-dark text-danger m-2 m-lg-5 p-4">
          {paymentLoader ? (
            <div>
              <img src={loader} style={{ width: "10%" }} alt="loading..." />
              {transactionHash.hash}
            </div>
          ) : (
            <div>
              <img src={greenTick} style={{ width: "10%" }} alt="tick" />
              <h1>
                THANKS FOR YOUR <br /> ORDER!!
              </h1>
              <p className="text-light">
                Your order is accepted. A customer guide would contact you
                shortly for more details.
              </p>
              <p className='text-light'>{transactionHash.hash}</p>
            </div>
          )}
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