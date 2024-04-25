import React from "react";
import Service from "./Service";

import './Service.css'
import Nav2 from "../LoginPage/nav2";







export default function Home() {
  return (
    <div>
      <div>
        <Nav2/>
      </div>
     <div>
      <Service /> 
    </div>
    </div>
  );
}