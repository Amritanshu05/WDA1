"use client"
import React from "react";
import Image from "next/image";

const First = () => {
  return (
    <div>
      <div className=" w-screen h-auto piyush:h-screen bg-amber-50 grid grid-cols-1 piyush:grid-cols-5">
        <div className=" col-span-1 piyush:col-span-3 text-black  flex justify-center items-center pt-24 piyush:pt-0 pl-8 sm:pl-0 ">
          <div>
            <div
              id="first"
              className="text-3xl sm:text-5xl   amrit:text-7xl md:scroll-pb-7 amrit:pb-10 font-bold "
            >
              WELCOME
            </div>
            <br />
            <div
              id="second"
              className="text-xl amrit:text-3xl  md:scroll-pb-7 amrit:pb-10 font-semibold leading-loose"
            >
              TO
            </div>
            <br />
            <div
              id="third"
              className="text-3xl sm:text-5xl  amrit:text-7xl font-bold"
            >
              UNITRENDS
            </div>
            <div className="pt-8 ">
              <br />
              <button className="btn btn-error text-white  ">
                <a href="http://127.0.0.1:5500/Cartpage/index.html">
                  GO SHOPPING
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* <div className=" col-span-1 piyush:col-span-2 bg-amber-50 flex justify-center items-center">
          <image src="./LOGO1.png" alt="" className="w-auto tanish:w-2/3 sm:w-2/3 md:w-1/2 piyush:w-11/12 amrit:w-auto pb-12" />
        </div> */}
        <div className="col-span-1 piyush:col-span-2 bg-amber-50 flex justify-center items-center">
          <Image
            src="/LOGO1.png"
            alt=""
            width={500} // specify the width
            height={500} // specify the height
            className="w-auto tanish:w-2/3 sm:w-2/3 md:w-1/2 piyush:w-11/12 amrit:w-auto pb-12"
          />
        </div>
      </div>
    </div>
  );
};

export default First;
