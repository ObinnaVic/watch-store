import React, {useState} from 'react';
import { useGlobalContext } from './context';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const OurProducts = () => {
    const { info } = useGlobalContext();
    const [page, setPage] = useState(1);

    return (
      <div>
        <h2 className="category-head my-4">Our Products </h2>
        <div className="row ourProduct-sec">
          {info.slice((page - 1) * 10, (page - 1) * 10 + 8).map((item) => {
            const { image, price, name, id } = item;
            return (
              <div className="col-6 col-md-4 col-lg-3" key={id}>
                <div
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "100%" }}
                >
                  <div className="product-img-container p-3">
                    <img src={image} className="product-img" alt="products" />
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
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: 20,
          }}
          count={info.length / 10}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      </div>
    );
}

export default OurProducts;