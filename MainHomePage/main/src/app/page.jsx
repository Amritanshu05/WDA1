import First from "./mycomp/first";
import Second from "./mycomp/second";
import Footer from "./mycomp/footer";
import Nav2 from "./mycomp/nav2";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div>
        {/* <Link href="/AboutUs">
        <button className="btn btn-ghost btn-circle">hii</button>
</Link> */}
      </div>

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
