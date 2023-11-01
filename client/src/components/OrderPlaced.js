import React from 'react';
import { Link } from 'react-router-dom';
import greenTick from '../img/greenTick.gif';
import loader from "../img/loader.gif";
import { useGlobalContext } from "./context";


const OrderPlaced = () => {
  const {transactionHash, paymentLoader} = useGlobalContext();

    const copyText = () => {
      // Copy the transactionHash
      navigator.clipboard.writeText(transactionHash.hash);

      // Alert the copied text
      alert("Copied the text: " + transactionHash.hash);
    }

    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">Cart</h1>
        </div>
        <div className="text-center bg-dark text-danger m-2 m-lg-5 p-4">
          {paymentLoader ? (
            <div>
              <img src={loader} style={{ width: "10%" }} alt="loading..." />
              <p>Waiting for wallet confirmation</p>
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
              <p>transaction Hash:</p>
              <p className="text-light">
                {transactionHash.hash.slice(0, 8)}...
                {transactionHash.hash.slice(-8)}
              </p>
              <button
                className="btn btn-link fw-bold"
                onClick={copyText}
              >
                Copy Hash
              </button>
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