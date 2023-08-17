import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { data } from './data';
import { Pagination } from "@mui/material";
import { useGlobalContext } from './context';

const Product = () => {
    const [IndividualProduct, setIndividualProduct] = useState('');
    const [page, setPage] = useState(1);
    const [otherProducts, setOtherProducts] = useState(data);
    const {id} = useParams();
    const {addCart, goToCart, cartAlert} = useGlobalContext();


    // FUNCTION WHICH REMOVES PRODUCT SELECTED AND CENTRALLY DISPLAYED
    const filterProducts = () => {
        window.scroll(0, 10);
        const newProducts = data.filter((item) => item.id !== parseInt(id));
        setOtherProducts(newProducts);
    }

    useEffect(() => {
      filterProducts();
    }, [id]);

    // FUNNCTION WHICH FILTERS OUT AND DISPLAY THE PARTICULAR PRODUCT CLICKED ON
    useEffect(() => {
        const FilterProduct = data.find((item) => item.id === parseInt(id));
        setIndividualProduct(FilterProduct);
    }, [id]);

    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">PRODUCT</h1>
        </div>

        <div className="product-body">
          <div className="row">
            <div className="col-lg-7 col-sm-12 product-image">
              <img
                src={IndividualProduct.image}
                style={{ width: "70%" }}
                alt="product"
              />
            </div>
            <div className="col-lg-5 col-sm-12">
              <div
                className="shadow bg-body p-4 mt-5 rounded"
                style={{ width: "100%" }}
              >
                <div>
                  <h5 className="fw-bold">-{IndividualProduct.name}-</h5>
                  <h6>{IndividualProduct.description}</h6>
                  <div className="d-flex">
                    {Array(IndividualProduct.rating)
                      .fill()
                      .map((_, i) => (
                        <p className="text-warning" key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </p>
                      ))}
                  </div>
                  <h3 className="mt-5">${IndividualProduct.price}</h3>
                  <p>Prices may vary online, in stores, and in-app</p>
                  <div className="product-btn">
                    <button
                      className="rounded-pill px-3 border-danger ms-2"
                      onClick={() => addCart(IndividualProduct.id)}
                    >
                      Add To Cart
                    </button>
                    <Link to="/cart" onClick={() => window.scroll(0, 10)}>
                      <button
                        className={
                          goToCart
                            ? "rounded-pill px-3 border-danger ms-2"
                            : "d-none"
                        }
                      >
                        Cart
                      </button>
                    </Link>
                  </div>
                  <hr />
                </div>
                <div>
                  <p className="mb-4">
                    <span className="text-danger me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="20"
                        fill="currentColor"
                        className="bi bi-truck"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </span>
                    Free shipping, arrives by Fri, Sep 30 to Sacramento, 95829
                  </p>
                  <p className="mb-4">
                    <span className="text-danger me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="20"
                        fill="currentColor"
                        className="bi bi-shop"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                      </svg>
                    </span>
                    Sold and shipped by Shopemco | Exclusive Merchandise Co. Emc
                    Inc
                  </p>
                  <p className="mb-4">
                    <span className="text-danger me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-clockwise"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                        />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                      </svg>
                    </span>
                    Free 30-Day returns
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER PRODUCTS SECTION */}

          <div className="other-product-sec">
            <hr />
            <h2 className="category-head my-4">Other Products </h2>
            <div className="row ourProduct-sec">
              {otherProducts
                .slice((page - 1) * 10, (page - 1) * 10 + 4)
                .map((item) => {
                  const { image, price, name, id } = item;
                  return (
                    <div className="col-6 col-md-4 col-lg-3" key={id}>
                      <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ height: "100%" }}
                      >
                        <div className="product-img-container p-3">
                          <img
                            src={image}
                            className="product-img"
                            alt="products"
                          />
                        </div>
                        <h5 className="product-name">{name}</h5>
                        <h6 className="product-price text-danger">${price}</h6>
                        <Link to={`/product/${id}`}>
                          <button
                            className="product-btn bg-dark text-light mb-4 rounded"
                            onClick={() => filterProducts}
                          >
                            View Product
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
            <Pagination
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                padding: 20,
              }}
              count={data.length / 10}
              onChange={(_, value) => {
                setPage(value);
              }}
            />
          </div>
        </div>
        <div
          className={
            cartAlert
              ? "d-flex align-items-center justify-content-center modal"
              : "d-none"
          }
        >
          <div className="modal-info text-center bg-dark text-light rounded">
            <h2>Item added to Cart</h2>
          </div>
        </div>
      </div>
    );
}

export default Product;