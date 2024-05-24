import React from "react";
import Link from "next/link"; // Import Link component
import Image from "next/image"; // Import Image component

const Nav = () => {
  return (
    <div className="navbar bg-amber-50 text-black fixed z-50">
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src="/LOGO1.png" alt="Tailwind CSS Navbar component" width={40} height={40} />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Link href="/" passHref>
          <a className="btn btn-ghost text-xl">UNITRENDS</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About us</a>
          </li>
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
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="drawer drawer-end bg-amber-50">
          {/* Drawer content */}
        </div>
        <div>
          <Link href="/LoginPage" passHref> {/* Use passHref to pass href to underlying element */}
            <button className="btn btn-outline btn-primary">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
