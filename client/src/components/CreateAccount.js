import React from 'react';
import { Link } from 'react-router-dom';
import watchLogo from "../img/watchLogo.png";
import { useGlobalContext } from './context';

const CreateAccount = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    confirmPassword,
    setConfirmPassword,
    createAccount,
    message
  } = useGlobalContext();

    return (
      <div className="d-flex flex-column align-items-center mb-5">
        <div className="d-flex justify-content-center">
          <img src={watchLogo} className="signIn-logo" alt="logo" />
        </div>
        <div className="signIn mt-4 bg-light">
          <h2 className="fw-bold pb-3"> Create Account</h2>
          <div className="form">
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "red",
              }}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {message}
            </span>

            <h5 className="mt-4">Name</h5>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "red",
              }}
            />
            <h5 className="mt-4">Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "red",
              }}
            />
            <h5 className="mt-4">Confirm Password</h5>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "5px",
                borderRadius: "5px",
                borderColor: "red",
              }}
            />
          </div>
          <button
            className="w-100 bg-danger p-2 rounded my-4"
            onClick={() => createAccount()}
          >
            CREATE ACCOUNT
          </button>
          <p>
            By continuing, you agree to Brequet's Conditions of Use and Privacy
            Notice.
          </p>
          <hr />
          <p>
            Already have an account?
            <Link to="/signin">
              <h6>Sign In</h6>
            </Link>
          </p>
        </div>
      </div>
    );

}

export default CreateAccount;