import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const Shop = () => {
    const {data} = useGlobalContext();


    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">SHOP</h1>
        </div>
        <div className="shop-sec">
          <div className="row ourProduct-sec">
            {data.map((item) => {
              const { image, name, price, id } = item;
              return (
                <div className="col-6 col-md-4 col-lg-3" key={id}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ height: "100%" }}
                  >
                    <div className="product-img-container p-3 shop-product">
                      <img src={image} className="product-img" alt="products" />
                      <h6 className="bg-success p-1 available-tag">
                        Available
                      </h6>
                    </div>
                    <h5 className="product-name">{name}</h5>
                    <h6 className="product-price text-danger">${price}</h6>
                    <Link to={`/product/${id}`}>
                      <button className="product-btn bg-dark text-light mb-4 rounded">
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default Shop;