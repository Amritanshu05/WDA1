"use client"; // For Next.js client-side components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css"; // Ensure this CSS file is in the same folder or accessible path

function Login() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState(null); // For displaying success or error messages

  useEffect(() => {
    const handleClickOutsideForm = (event) => {
      const modal = document.getElementById("login-form");
      if (modal && !modal.contains(event.target)) {
        const login = document.getElementById("login");
        const register = document.getElementById("register");
        const btn = document.getElementById("btn");

        if (login && register && btn) {
          login.style.left = "50px";
          register.style.left = "450px";
          btn.style.left = "0px";
        }
      }
    };

    document.body.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.body.removeEventListener("click", handleClickOutsideForm);
    };
  }, []);

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/signin", // Ensure endpoint is correct
        loginData
      );
      setMessage("Logged in successfully!");
      alert("Logged in successfully!");
      window.location.href = "/"; // Redirect on successful login
    } catch (error) {
      setMessage("Login failed");
      console.error(error);
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    if (registrationData.password !== registrationData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8080/api/auth/signup", // Adjust endpoint as needed
        registrationData
      );
      setMessage("Registration successful!");
      alert("Registration successful!");
    } catch (error) {
      setMessage("Registration failed");
      console.error(error);
    }
  };

  const login = () => {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const btn = document.getElementById("btn");

    if (login && register && btn) {
      login.style.left = "50px";
      register.style.left = "450px";
      btn.style.left = "0px";
    }
  };

  const register = () => {
    const login = document.getElementById("login");
    const register = document.getElementById("register");
    const btn = document.getElementById("btn");
  
    if (login && register && btn) { // Use `&&` instead of `and`
      login.style.left = "-400px";
      register.style.left = "50px";
      btn.style.left = "110px";
    }
  };
  
  return (
    <div>
      <div className="w-screen h-auto">
        <div id="login-form" className="bg-white w-screen h-screen flex justify-center">
          <div className="w-96 relative m-14 bg-white px-10 py-10 overflow-hidden flex-row justify-center">
            <div className="flex justify-between items-center w-60 relative shadow-lg rounded-3xl">
              <div id="btn" className="absolute w-32 h-full bg-amber-200 rounded-3xl transition-all duration-500"></div>
              <button type="button" onClick={login} className="px-10 py-1 bg-transparent relative">
                Log In
              </button>
              <button type="button" onClick={register} className="px-6 py-1 bg-transparent relative">
                Register
              </button>
            </div>

            {/* Login Form */}
            <form id="login" className="top-28 absolute w-60 transition-all duration-500 leading-loose" onSubmit={handleLoginSubmit}>
              <input
                type="text"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Username"
                required
                name="username"
                onChange={handleLoginInputChange}
              />
              <input
                type="password"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Enter Password"
                required
                name="password"
                onChange={handleLoginInputChange}
              />
              <div className="flex items-center mt-3 space-x-2 mb-3">
                <input type="checkbox" id="remember-password" />
                <label htmlFor="remember-password" className="text-black text-sm">
                  Remember Password
                </label>
              </div>
              <button type="submit" className="w-60 px-1 py-2 bg-sky-700 rounded-3xl">
                Log in
              </button>
            </form>

            {/* Registration Form */}
            <form id="register" className="top-28 absolute w-60 transition-all duration-500 leading-loose" onSubmit={handleRegistrationSubmit}>
              <input
                type="text"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Username"
                required
                name="username"
                onChange={handleRegistrationInputChange}
              />
              <input
                type="email"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Email"
                required
                name="email"
                onChange={handleRegistrationInputChange}
              />
              <input
                type="password"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Enter Password"
                required
                name="password"
                onChange={handleRegistrationInputChange}
              />
              <input
                type="password"
                className="w-full px-1 mx-1 border-b border-gray-400 bg-transparent"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                onChange={handleRegistrationInputChange}
              />
              <div className="flex items-center mt-3 space-x-2 mb-3">
                <input type="checkbox" id="agree-terms" />
                <label htmlFor="agree-terms" className="text-black text-sm">
                  Agree to terms
                </label>
              </div>
              <button type="submit" className="w-60 px-1 py-2 bg-sky-700 rounded-3xl">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
