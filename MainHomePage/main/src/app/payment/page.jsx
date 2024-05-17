import React from "react";
import Payment from "./Payment";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="flex justify-end bg-white gap-2 ">
        <button className="btn btn-ghost">
          <a href="http://127.0.0.1:5500/WDA1/MainHomePage/main/Cartpage/index.html"> Back to Cart</a>
         
        
        </button>
      <Link href="/">
        <button className="btn  btn-ghost">
          
          Back to home
        
        </button>
        </Link>
      </div>
      <Payment/>
    </div>
  );
};
