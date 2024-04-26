import React from "react";
import Link from "next/link";

const Nav2 = () => {
  return (
    <div>
      <div className="navbar bg-amber-50 text-black fixed z-50 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-50 rounded-box w-52"
            >
              <li>
                <a href="#equi">Equinox</a>
              </li>
              <li>
                <a href="#ens">Enspire</a>
              </li>
              {/* <li>
                <Link href="/AboutUs">
                  <button className="btn">About us</button>
                </Link>
              </li> */}
              <li>
                <a href="#sug">Suggestion Box</a>
              </li>
            </ul>
          </div>
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src="LOGO1.png" />
          </div>
          <div className="flex-1">
            
            <a href="#" className="btn btn-ghost text-xl">
              UNITRENDS
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a href="#equi">Equinox</a>
            </li>
            <li>
              <a href="#ens">Enspire</a>
            </li>

            <li>
              <a href="#sug">Suggestion Box</a>
            </li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          
          
         
          <div>
            <Link href="/AboutUs">
              <button className="btn btn-ghost ">About us</button>
            </Link>
          </div>
          <div>
            <Link href="/ContactUs">
              <button className="btn btn-ghost ">Contact us</button>
            </Link>
          </div>
         
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
           <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <Link href="/payment">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* <span className="badge badge-sm indicator-item">8</span> */}
              </div>
              </Link>
              
            </div>
            
          
          </div>
          <div>
            <Link href="/LoginPage">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Nav2;
