import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="input-field">
          <input type="text" id="name" required aria-label="Enter your name" />
          <label htmlFor="name">Enter your name</label>
        </div>
        <div className="input-field">
          <input type="email" id="email" required aria-label="Enter your email" />
          <label htmlFor="email">Enter your email</label>
        </div>
        <div className="input-field">
          <input
            type={passwordType}
            id="password"
            required
            aria-label="Enter your password"
          />
          <label htmlFor="password">Enter your password</label>
          <span className="toggle-password" onClick={togglePassword} title="Toggle Password Visibility">
            {passwordType === "password" ? "👁" : "🙈"}
          </span>
        </div>
        <div className="input-field">
          <input
            type={confirmPasswordType}
            id="confirm-password"
            required
            aria-label="Confirm your password"
          />
          <label htmlFor="confirm-password">Confirm your password</label>
          <span className="toggle-password" onClick={toggleConfirmPassword} title="Toggle Password Visibility">
            {confirmPasswordType === "password" ? "👁" : "🙈"}
          </span>
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-link">
          <p>Already have an account?</p>
          <button type="button" onClick={() => navigate("/login")}>Log In</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
