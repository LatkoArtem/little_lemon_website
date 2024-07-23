import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load login state from localStorage on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const savedEmail = localStorage.getItem("email") || "";
    const savedPassword = localStorage.getItem("password") || "";

    setIsLoggedIn(loggedIn);
    setEmail(savedEmail);
    setPassword(savedPassword);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setIsLoggedIn(true);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
      if (errors.email) {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    } else if (id === "password") {
      setPassword(value);
      if (errors.password) {
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleFormMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <div>
          <h1>You are now logged in!</h1>
          <button onClick={handleLogout} className="logout-button">
            Log out
          </button>
        </div>
      ) : (
        <>
          <h1>{isSignUp ? "Sign up" : "Log in"}</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handleChange}
                  className={errors.password ? "input-error" : ""}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="password-toggle-icon"
                  onClick={toggleShowPassword}
                />
              </div>
              {errors.password && <p className="error-text">{errors.password}</p>}
            </div>
            <button type="submit" className="login-button">
              {isSignUp ? "Sign up" : "Log in"}
            </button>
          </form>
          <h4 className="toggle-auth" onClick={toggleFormMode}>
            <u>{isSignUp ? "Log in?" : "Sign up?"}</u>
          </h4>
        </>
      )}
    </div>
  );
};

export default Login;
