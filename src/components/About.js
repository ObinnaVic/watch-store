import React from 'react';
import aboutImage from '../img/aboutImage.jpg';
import LouisBrequet from '../img/LouisBrequet.jpg';
import BillGates from "../img/BillGates.jpg";
import warrenBuffett from "../img/warrenBuffett.jpg";
import VictorNkire from "../img/VictorNkire.jpg";
import appleWatch from "../img/appleWatch.png";
import breitlingWatch from "../img/breitlingWatch.png";
import citizenWatch from "../img/citizenWatch.png";
import seiko from "../img/seiko.png";

const About = () => {
    return (
      <div>
        <div className="product-sec">
          <h1 className="text-light">ABOUT US</h1>
        </div>
        <div className="categories">
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
          <div className="about-sec">
            <div className="row">
              <div className="col-sm-12 col-lg-6 mb-5 mb-lg-0">
                <div className="about-text">
                  <h1 className="text-danger">WE ARE BREQUET</h1>
                  <p className="text-light">
                    Breguet is a highly regarded watch manufacturer. Over the
                    years, notable Breguet patrons and timepieces owners include
                    King George III, Queen Victoria, Alexandre I of Russia,
                    Napoléon Bonaparte, Ettore Bugatti, Sir Winston Churchill,
                    Sergei Rachmaninoff, Gioachino Rossini, Arthur Rubinstein
                    and so on.
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 d-flex justify-content-center">
                <img src={aboutImage} className="about-image" alt="about" />
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <div className="text-danger mb-5 mb-lg-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      className="bi bi-truck mb-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                    <h5>SHOPS WORLDWIDE</h5>
                    <p>
                      Shop from every corner of the world and experience
                      excellent, luxurious and special service from our various
                      stores worldwide.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="text-danger about-sub-sec px-lg-4 mb-5 mb-lg-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="58"
                      fill="currentColor"
                      className="bi bi-hourglass-split mb-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                    </svg>
                    <h5>24/7 SUPPORT</h5>
                    <p>
                      Need support and assistance at any point in time during
                      your shopping and payment process? We have you covered all
                      day, all week. Have a complaint about a product? We are
                      always here to assist.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-4">
                  <div className="text-danger ps-lg-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="58"
                      fill="currentColor"
                      className="bi bi-box2-fill mb-4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z" />
                    </svg>
                    <h5>BIG SAVING SHOP</h5>
                    <p>
                      Get every luxury in a wristwatch at much affordable prices
                      which encourages good savings among our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-light d-flex justify-content-between align-items-center">
              <img
                src={breitlingWatch}
                className="watch-logo"
                alt="watch-logo"
              />
              <img src={appleWatch} className="watch-logo" alt="watch-logo" />
              <img src={seiko} className="watch-logo" alt="watch-logo" />
              <img src={citizenWatch} className="watch-logo" alt="watch-logo" />
            </div>
            <div>
              <div className="row mt-5">
                <div className="col-sm-12 col-lg-3">
                  <div className="bg-light d-flex flex-column align-items-center mb-4 mb-lg-0 p-3">
                    <img
                      src={LouisBrequet}
                      className="about-people"
                      alt="LouisBrequet"
                    />
                    <h6>Founder</h6>
                    <h5>LOUIS BREQUET</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="bg-light d-flex flex-column align-items-center mb-4 mb-lg-0 p-3">
                    <img
                      src={BillGates}
                      className="about-people"
                      alt="BillGates"
                    />
                    <h6>CEO</h6>
                    <h5>BILL GATES</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="bg-light d-flex flex-column align-items-center mb-5 mb-lg-0 p-3">
                    <img
                      src={warrenBuffett}
                      className="about-people"
                      alt="warrenBuffett"
                    />
                    <h6>INVESTOR</h6>
                    <h5>WARREN BUFFETT</h5>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="bg-light d-flex flex-column align-items-center mb-5 mb-lg-0 p-3">
                    <img
                      src={VictorNkire}
                      className="about-people"
                      alt="VictorNkire"
                    />
                    <h6>DEVELOPER</h6>
                    <h5>VICTOR NKIRE</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-shape-divider-bottom-1664317079">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    );
}

export default About;