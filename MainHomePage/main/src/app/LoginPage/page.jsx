import React from "react";
// import Nav2 from "./nav2";
import Login from "./login";
import Nav from "../mycomp/nav";
import Nav2 from "./nav2";
// import Nav2 from "./nav2";

// import Nav2 from "./nav2";

export default function Home() {
  return (
    <div>
      <div >
      <Nav2/>

      </div>
      
      <div className="mt-30">
        <Login />
      </div>
    </div>
  );
}