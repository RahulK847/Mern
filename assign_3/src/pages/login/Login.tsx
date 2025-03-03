import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [buttonClicked, setButtonClicked] = useState(false);

  useEffect(()=>{
    if (buttonClicked){
      console.log("clicked for Register")
    }
    else{
      console.log("clicked for SignUp")
    }
  }, [buttonClicked])

  const handleOnClick = () => {
    setButtonClicked(!buttonClicked);
  };

  const navigate = useNavigate();

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-field">
          <input type="text" id="email" required aria-label="Enter your email" />
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
          <span
            className="toggle-password"
            onClick={togglePassword}
            title="Toggle Password Visibility" 
          >
            {passwordType === "password" ? "👁" : "🙈"}
          </span>
        </div>
        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            <p>Remember me</p>
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>Don't have an account? </p>
          {buttonClicked ? (
            <button type="button" onClick={handleOnClick}>
            Sign up Then
          </button>
          ) : (
            <button type="button" onClick={handleOnClick}>
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
