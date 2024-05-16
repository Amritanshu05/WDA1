import React from "react";
import Nav3 from "./Nav3";
// import 
import Lauda from "./Lauda";
import Template from "./template";
import Products from "./Products";
export default function Home() {
  return (
    <div>
      <div>
        <Template/>
      </div>
      <div>
       <Products/>

        {/* <Main/> */}
      </div>
    </div>
  );
}
