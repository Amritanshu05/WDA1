 import Image from "next/image";
import Nav from "./mycomp/nav";
import First from "./mycomp/first";
import Second from "./mycomp/second";
import Footer from "./mycomp/footer";
import Nav2 from "./mycomp/nav1";
import Link from "next/link";

import './globals.css';

export default function Home() {
  return (
<div>

  <div>
    <Nav2/>
  </div>
  <div>
    <First />
  </div>
  <div>
    <Second/>
  </div>
  <div>
    <Footer/>
  </div>
</div>  
  );
}
