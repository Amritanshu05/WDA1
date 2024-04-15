import React from "react";

const First = () => {
  return (
    <div>
      <div className="flex h-screen w-screen bg-amber-50">
        {/* <div className="flex flex-col justify-center items-center w-3/5 text-black font-bold"> */}
        <div className=" w-3/5 text-black  pt-32 pl-60  ">
          <div id="first" className="text-5xl font-bold ">
            WELCOME
          </div>
          <br />
          <div id="second" className="text-2xl font-semibold leading-loose ">
            TO
          </div>
          <br />
          <div id="third" className="text-5xl font-bold ">
            UNITRENDS
          </div>
          <div className="pt-8">
            <br />
            <button className="btn btn-error text-white ">GO SHOPPING</button>
          </div>
        </div>
        <div className="w-2/5 bg-amber-50 flex justify-start items-center">
          <img src="./LOGO1.png" alt="" className="w-96 pb-32" />
        </div>
      </div>
     
    </div>
  );
};

export default First;
