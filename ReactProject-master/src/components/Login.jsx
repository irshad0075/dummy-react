import React from "react";
import "../styles/Login.css";

export default function Login(props) {
  return (
    <div className="login-container">
      <div className="img">
        <img
          src="https://i.pinimg.com/564x/15/64/27/15642738816ccde46e1057b127c7ac8f.jpg"
          alt=""
        />
      </div>
      <div className="form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title" >Log In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn " style={{ background: " #e1997e" }}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
             Having no account <a href="#">SignUp</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
