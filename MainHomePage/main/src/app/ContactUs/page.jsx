import React from "react";
import Nav from "./nav";
import First from "./first";

export default function Home() {
  return (
    <div>
      <div >
      <Nav/>

      </div>
      
      <div className="mt-30">
        <First />
      </div>
    </div>
  );
}