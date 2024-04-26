import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-slate-50 text-black pb-4 space-x-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    </div>
    <div>
  <div className="avatar">
  <div className="w-16 rounded-3xl">
    <img src="LOGO1.png" />
  </div>
</div>
  </div>
  </div>
  <div className="navbar-center hidden xl:flex font-serif">
    <ul className="menu menu-horizontal space-x-10 ">
      
      <Link href="/">
      <button className='btn btn-ghost text-xl'>Home</button>
      </Link>
      <Link href='/ContactUs'>
      <button className='btn btn-ghost text-xl'>Contact us</button>
      </Link>
      <Link href='/AboutUs'>
      <button className='btn btn-ghost text-xl'>About us</button>
      </Link>
      <Link href='/LoginPage'>
      <button className='btn btn-ghost text-xl'>Login</button>
      </Link>
        {/* <details>
          <summary>EN</summary>
          <ul className="p-2">
            <li><a>Australia</a></li>
            <li><a>US</a></li>
            <li><a>United Kingdom</a></li>
            <li><a>United States</a></li>
            <li><a> </a></li>
          </ul>
        </details> */}
        <div className='pt-3 text-xl font-semibold'>
        Call Sales:-1-888-668-88
        </div>
      
      {/* <li><a></a></li> */}
    </ul>
  </div>
  <div className="navbar-end">
  </div>
    
</div>

    </div>
  )
}

export default Nav
