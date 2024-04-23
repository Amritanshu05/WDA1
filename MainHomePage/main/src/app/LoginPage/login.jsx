"use client";
import React, { useEffect } from 'react';
import Nav2 from './nav2';
import "./styles.css";
import Link from "next/link";

function Login() {
  useEffect(() => {
    const handleClickOutsideForm = (event) => {
      const modal = document.getElementById("login-form");
      const isClickInsideForm = modal.contains(event.target);

      if (!isClickInsideForm) {
        // modal.style.display = "none";
        document.getElementById("login").style.left = "50px";
        document.getElementById("register").style.left = "450px";
        document.getElementById("btn").style.left = "0px";
      }
    };

    document.body.addEventListener("click", handleClickOutsideForm);

    return () => {
      document.body.removeEventListener("click", handleClickOutsideForm);
    };
  }, []);

  const login = () => {
    document.getElementById("login").style.left = "50px";
    document.getElementById("register").style.left = "450px";
    document.getElementById("btn").style.left = "0px";
  };

  const register = () => {
    document.getElementById("login").style.left = "-400px";
    document.getElementById("register").style.left = "50px";
    document.getElementById("btn").style.left = "110px";
  };

  return (
    <div>
      <div>
        <div className="w-screen h-auto">
          <div
            id="login-form"
            className="bg-white  w-screen h-screen flex justify-center"
          >
            <div className="w-96 relative m-14 bg-white px-10 py-10 overflow-hidden flex-row justify-center">
              <div className="flex justify-between items-center w-60 relative shadow-lg rounded-3xl">
                <div
                  id="btn"
                  className="absolute w-32 h-full bg-amber-200 rounded-3xl transition-all duration-500"
                ></div>
                <button
                  type="button"
                  onClick={login}
                  className="px-10 py-1 cursor- bg-transparent  relative"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={register}
                  className="px-6 py-1 cursor-pointer bg-transparent  relative"
                >
                  Register
                </button>
              </div>

              <form
                id="login"
                className="top-28 absolute w-60 h-full transition-all duration-500 leading-loose"
              >
                <input type="text" className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent " placeholder="Email Id" required />
                <input type="password" className="w-full px-1 pt-5 mx-1 border-b border-gray-400  bg-transparent" placeholder="Enter Password" required />
                <div className="flex items-center mt-3 space-x-2 mb-3 ">
                  <input type="checkbox" id="remember-password"  />
                  <label htmlFor="remember-password" className="text-black text-sm">
                    Remember Password
                  </label>
                </div>
                <button type="submit" className="w-60 px-1 py-2 cursor-pointer block m-auto bg-sky-700  rounded-3xl ">Log in</button>
              </form>

              <form
                id="register"
                className="top-28 absolute w-60 h-full transition-all duration-500 leading-loose"
              >
                <input
                  type="text"
                  className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent"
                  placeholder="Last Name "
                  required
                />
                <input
                  type="email"
                  className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent"
                  placeholder="Email Id"
                  required
                />
                <input
                  type="password"
                  className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent"
                  placeholder="Enter Password"
                  required
                />
                <input
                  type="password"
                  className="w-full px-1 mx-1 border-b border-gray-400  bg-transparent"
                  placeholder="Confirm Password"
                  required
                />
                <div className="flex items-center mt-3 space-x-2 mb-3 ">
                  <input type="checkbox" id="remember-password"  />
                  <label htmlFor="remember-password" className="text-black text-sm">
                    Remember Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-60 px-1 py-2 cursor-pointer block m-auto bg-sky-700   rounded-3xl "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;