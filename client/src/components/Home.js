import React from 'react';
import headimg from '../img/headimg.avif';
import LandingPage from './LandingPage';


const Home = () => {
    return (
      <div>
        <div className="row head">
          <div className="col-6 d-flex align-items-center justify-content-center">
            <div className="text-light">
              <h1 className="main-header fw-bold">
                Choose Your Time <br /> And Luxury With Us.
              </h1>
              <p className="sub-header">
                We will help you to choose the product <br /> that without doubt
                suits your best
                <br /> and we mean it.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-center">
              <img src={headimg} className="head-img" alt="head" />
            </div>
          </div>
        </div>
        <LandingPage/>

      </div>
    );
}

export default Home;