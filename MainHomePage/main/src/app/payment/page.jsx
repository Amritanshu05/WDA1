import React from "react";
import Payment from "./Payment";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="flex justify-end">
      <Link href="/">
        <button className="btn btn-outline btn-primary">
          
          Back to home
        
        </button>
        </Link>
      </div>
      <Payment/>
    </div>
  );
};
