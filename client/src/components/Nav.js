import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import watchLogo from '../img/watchLogo.png';
import { useGlobalContext } from './context';

const Nav = () => {
    const { nav, openNav, closeNav, user,currentAccount, disconnectWallet } =
      useGlobalContext();
    return (
      <div>
        {/* Mobile Top Bar */}
        <div className="sub-nav bg-light p-3">
          <div>
            <img src={watchLogo} style={{ width: "20%" }} alt="logo" />
          </div>
          <div className="toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={() => openNav()}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>

        {/* Desktop/Mobile Navigation */}
        <div className={nav ? "nav-container open-nav" : "nav-container"}>
          <div className="navbar navbar-expand-lg">
            <div className="closeicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-circle-fill m-2"
                viewBox="0 0 16 16"
                onClick={() => closeNav()}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </div>

            <img src={watchLogo} className="logo" alt="logo" />

            <div className="navbar-nav ms-lg-auto text-center">
              <Link
                to="/"
                className="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                About
              </Link>
              <Link
                to="/shop"
                className="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Shop
              </Link>
              <Link
                to="/contact"
                className="nav-item nav-link fw-bold"
                onClick={() => closeNav()}
              >
                Contact
              </Link>
            </div>
            {currentAccount ? (
              <button
                type="button"
                className="nav-item nav-link fw-bold"
                onClick={disconnectWallet}
              >
                Disconnect-wallet
              </button>
            ) : (
              ""
            )}
            <Link
              to="/signin"
              className="nav-item nav-link fw-bold ms-lg-auto"
              onClick={() => closeNav()}
            >
              {user ? "Log Out" : "Sign In"}
            </Link>
            <div>
              <Link to="Cart" className="text-decoration-none">
                <button
                  className="btn d-flex align-items-center ms-lg-3 border-dark fw-bold"
                  onClick={() => closeNav()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart-check-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
}

export default Nav;