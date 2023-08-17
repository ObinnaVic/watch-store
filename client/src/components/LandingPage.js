import React from 'react';
import allWatch from '../img/allWatch.png';
import female from '../img/female.png';
import male from '../img/male.png';
import { useGlobalContext } from './context';
import OurProducts from "./OurProducts";
import watchBackground from '../img/watchBackground.png';
import Reviews from './Reviews';
import appleWatch from '../img/appleWatch.png';
import breitlingWatch from '../img/breitlingWatch.png';
import citizenWatch from '../img/citizenWatch.png';
import seiko from '../img/seiko.png';
import newsOne from '../img/newsOne.webp';
import newsTwo from "../img/newsTwo.webp";
import newsThree from "../img/newsThree.webp";


const LandingPage = () => {
  const {filterItems, LetterInput, setLetterInput, EmailModal, openEmailModal, closeEmailModal} = useGlobalContext();



    return (
      <main className="categories">
        <div className="custom-shape-divider-bottom-1663372552">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <section className="category-sec">
          <div>
            <h2 className="text-danger category-head">Shop By Catergories</h2>
            <p className="text-light category-subhead">
              Pick a category you need
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <button
                className="image-container"
                onClick={() => filterItems("all")}
              >
                <img src={allWatch} alt="all-category" />
                <h6 className="text-danger fw-bold">All</h6>
              </button>
            </div>
            <div className="col-4">
              <button
                className="image-container"
                onClick={() => filterItems("Female")}
              >
                <img src={female} alt="female-category" />
                <h6 className="text-danger fw-bold">Female</h6>
              </button>
            </div>
            <div className="col-4">
              <button
                className="image-container"
                onClick={() => filterItems("male")}
              >
                <img src={male} alt="male-category" />
                <h6 className="text-danger fw-bold">Male</h6>
              </button>
            </div>
          </div>

          {/* {Home Product section} */}
          <OurProducts />
          <div className="row my-5 home-about">
            <div className="col-sm-12 col-lg-6 homeAbout-img">
              <img
                src={watchBackground}
                style={{ width: "100%", height: "100%" }}
                alt="about-background"
              />
            </div>
            <div className="col-sm-12 col-lg-6 homeAbout-img">
              <div
                className="homeAbout-text bg-light"
                style={{ height: "100%" }}
              >
                <h3 className="text-danger fw-bold text-decoration-underline">
                  ABOUT BREQUET
                </h3>
                <p>
                  Breguet is a luxury watch, clock and jewelry manufacturer
                  founded by Abraham-Louis Breguet in Paris in 1775. Since 1999,
                  it has been a subsidiary of the Swiss Swatch Group.
                </p>
              </div>
            </div>
          </div>

          {/* Reveiws section */}
          <Reviews />
          <div className="d-flex justify-content-between align-items-center">
            <img src={breitlingWatch} className="watch-logo" alt="watch-logo" />
            <img src={appleWatch} className="watch-logo" alt="watch-logo" />
            <img src={seiko} className="watch-logo" alt="watch-logo" />
            <img src={citizenWatch} className="watch-logo" alt="watch-logo" />
          </div>

          {/* Latest News Section */}
          <div className="news-section my-5">
            <h2 className="text-dark category-head">LATEST NEWS</h2>
            <p>
              Learn about the latest happenings on the <br /> time keepers and
              stay upto date to the watch industries.
            </p>
            <div className="row">
              <div className="col-lg-4">
                <img src={newsOne} className="news-img" alt="news" />
                <h6>Patek Philippe Just Unveiled 5 More New Watches.</h6>
                <p>
                  <a
                    className="text-decoration-none"
                    href="https://www.yahoo.com/lifestyle/patek-philippe-just-unveiled-5-203057052.html?fr=sycsrp_catchall"
                  >
                    Read More...
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img src={newsTwo} className="news-img" alt="news" />
                <h6>
                  The First Swiss Watch in Space Just Got a Modern,
                  Limited-Edition Reissue.
                </h6>
                <p>
                  <a
                    className="text-decoration-none"
                    href="https://www.yahoo.com/lifestyle/first-swiss-watch-space-just-153003102.html?fr=sycsrp_catchall"
                  >
                    Read More...
                  </a>
                </p>
              </div>
              <div className="col-lg-4">
                <img src={newsThree} className="news-img" alt="news" />
                <h6>
                  Picasso’s 1960s Wristwatch Sells for $267,000, Shattering
                  Pre-Sale Estimates.
                </h6>
                <p>
                  <a
                    className="text-decoration-none"
                    href="https://www.yahoo.com/lifestyle/picasso-1960s-wristwatch-showcases-letters-220000647.html?fr=sycsrp_catchall"
                  >
                    Read More...
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* New Letter Section */}
          <div className="newsletter">
            <div className="text-center">
              <h2>Our Newsletter</h2>
              <p>
                Subscribe to get you{" "}
                <span className="text-danger">15% Discount</span> <br /> off
                your next purchase
              </p>
            </div>
            <div className="newsletter-input">
              <input
                type="email"
                value={LetterInput}
                style={{ width: "100%" }}
                className="border border-danger p-1 rounded"
                placeholder="Enter Email"
                onChange={(e) => setLetterInput(e.target.value)}
              />
            </div>
            <div>
              <button
                className="border-danger bg-danger text-light px-3 rounded"
                onClick={() => openEmailModal()}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <div className="custom-shape-divider-top-1663601318">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        {/* Newsletter Modal */}
        <div
          className={
            EmailModal
              ? "d-flex align-items-center justify-content-center modal"
              : "d-none"
          }
        >
          <div className="modal-info d-flex flex-column align-items-center">
            <button
              type="button"
              className="btn-close ms-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeEmailModal()}
            ></button>
            <h2>Your Email Is Subscribed.</h2>
            <p>Congratulations!!</p>
          </div>
        </div>
      </main>
    );
}

export default LandingPage;