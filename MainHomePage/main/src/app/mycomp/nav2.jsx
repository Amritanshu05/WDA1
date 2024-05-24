"use client"
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link"; // Import Link component
import Image from "next/image"; // Import Image component

const Nav2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-amber-50 text-black fixed z-50">
      <div className="navbar-start">
        <div className="dropdown relative" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-50 rounded-box w-52">
              {/* Dropdown content */}
            </ul>
          )}
        </div>
        <div className="w-10 rounded-full">
          <Image src="/LOGO1.png" alt="Tailwind CSS Navbar component" width={40} height={40} />
        </div>
        <div className="flex-1 ">
          <a href="#" className="btn btn-ghost text-xl ">
            UNITRENDS
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* Navbar center content */}
      </div>
      <div className="flex-none gap-2">
        <div className="hidden lg:block">
          <Link href="/AboutUs">
            <button className="btn btn-ghost ">About us</button>
          </Link>
        </div>
        <div className="hidden lg:block">
          <Link href="/ContactUs">
            <button className="btn btn-ghost ">Contact us</button>
          </Link>
        </div>
        <div className="form-control hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="pl-2">
          {/* Other buttons */}
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link href="/">
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
              </div>
            </Link>
          </div>
        </div>
        <div className="justify-end">
          <Link href="/LoginPage">
            <button className="btn btn-outline btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
