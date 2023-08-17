import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context';

const Cart = ({setAmount}) => {
  const { cart, user } = useGlobalContext();
  const [data, setData] = useState(flatten(cart));
  const [subtotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    totalFunc();
  });

  //   FUNCTION TO FLATTEN OUT THE NESTED ARRAY RECEIVED IN CART STATE
  function flatten(arr) {
    let flatArray = [];

    if (Array.isArray(arr)) {
      //CHECKING IF ARR IS AN ARRAY AFTER THE DATA STATE DEFAULT FUNCTION RUNS
      arr.forEach((element) => {
        //IF ITS AN ARRAY, FLATTEN OUT THE NESTED ARRAY AND RETURN THE NEW ARRAY TO THE DATA STATE
        if (Array.isArray(element)) {
          flatArray = flatArray.concat(flatten(element));
        } else {
          flatArray.push(element);
        }
      });

      return [...new Set(flatArray)]; //CREATING AN ARRAY WITH UNIQUE VALUES TO PREVENT DUPLICATED PRODUCTS IN THE CART
    } else {
      return []; //IF ARR IS NOT AN ARRAY, RETURN AN EMPTY ARRAY
    }
  }

  // FUNCTION TO RMOVE PARTICULAR PRODUCT FROM THE CART
  function removeItem(id) {
    const removedItem = data.filter((item) => item.id !== id); //CHECKING IF THE PARTICULAR PRODUCT CLICKED IS EQUAL TO THE ITEM ID
    setData(removedItem);
  }

  //FUNCTION TO INCREASE THE AMOUNT OF EACH PRODUCT IN THE CART
  function increaseAmount(id) {
    let tempCart = data.map((item) => {
      if (item.id === id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setData(tempCart);
  }


  // FUNCTION TO CALCULATE TOTAL AND SUBTOTAL OF THE CART ITEMS
  const totalFunc = () => {
    let { total } = data.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      }
    );
    setSubTotal(total);
    setTotal(total + 15);
    setAmount(total);
  };

  //   FUNCTION IF THE CART AND DATA IS EMPTY
  if (data.length === 0) {
    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">Cart</h1>
        </div>
        <div className="text-center bg-dark text-danger m-2 m-lg-5 p-4">
          <h1>
            YOUR SHOPPING CART IS <br /> EMPTY
          </h1>
          <p className="text-light">
            To see which products are in cart, go to Shop page and click on "Add
            to Cart" button.
          </p>
          <p className="text-light">
            For now, there is no product in your cart.
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

  return (
    <div>
      <div className="product-sec">
        <h1 className="text-light">Cart</h1>
      </div>
      <div className="cart-sec">
        <h2 className="category-head">Product</h2>
        <div className="row">
          <div className="col-sm-12 col-lg-6 d-block">
            {data.map((item) => {
              //MAPPING THROUGH THE DATA ARRAY RECIEVED FROM THE STATE
              const { image, name, price, id, amount } = item;
              return (
                <div
                  className="d-flex align-items-center mb-2 shadow shadow-large"
                  key={id}
                >
                  <button
                    onClick={() => removeItem(id)}
                    className="border-0 bg-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-circle-fill m-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </button>
                  <div className="d-flex align-items-center justify-content-between cart-product px-2 py-2">
                    <img src={image} className="cart-image" alt="product" />
                    <h6 className="amount bg-dark text-light rounded-circle">
                      {amount}
                    </h6>
                    <h6>{name}</h6>
                    <div className="d-flex align-items-center">
                      <h6 className="text-danger me-3">${price}</h6>
                      <button
                        className="fs-4 bg-dark text-light px-1"
                        onClick={() => increaseAmount(id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CALCULATING TOTAL FROM CART PRDUCTS */}
          <div className="col-sm-12 col-lg-6 mt-5 mt-lg-0">
            <div className="bg-dark text-light p-3">
              <h3>CART TOTALS</h3>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Subtotals:</p>
                <p>${subtotal}</p>
              </div>
              <hr />
              <h6>SHIPPING</h6>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Flat Rate:</p>
                <p>$15</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <h5>TOTAL:</h5>
                <p>${total}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-3">
              {!user ? (
                <Link to="/signin">
                  <button className="btn bg-danger rounded px-1 px-lg-4 border-danger text-light">
                    Sign In
                  </button>
                </Link>
              ) : (
                <Link to="/checkout">
                  <button className="btn bg-danger rounded px-1 px-lg-4 border-danger text-light">
                    Proceed to Checkout
                  </button>
                </Link>
              )}
              <Link to="/shop">
                <button className="btn rounded px-1 px-lg-4 border-secondary">
                  Continue to Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;