import React from "react";
import "./Service.css";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import img1 from './pic/img2.jpg';
// import img2 from './pic/img1.jpg';
// import img3 from './pic/img5.jpg';`
// import img4 from './pic/img4.jpg';
// import img5 from './pic/img3.jpg';
// import  "https://kit.fontawesome.com/7423a8371d.js" ;
// import '@fortawesome/fontawesome-free/css/all.min.css';

const Service = () => {
  let message = `At Unitrends Merchitects, we're all about blending creativity and technology to craft spaces that make you go, "Wow!" . We're not just suits and blueprints. We're a bunch of architects, designers, and project wizards who eat, sleep, and breathe creativity. We're a fun-loving crew with a serious passion for what we do.`;
  return (
    <div className="bg-slate-50">
      <div>
        <h1 className=" flex justify-center items-center text-3xl font-bold text-black ">
          The Team Behind UNITRENDS
        </h1>
      </div>
      <div className=" text-center  px-32 pt-4 font-semibold ">
        <div>
          At Unitrends Merchitects, we're all about blending creativity and
          technology to craft spaces that make you go, "Wow!" . We're not just
          suits and blueprints. We're a bunch of architects, designers, and
          project wizards who eat, sleep, and breathe creativity. We're a
          fun-loving crew with a serious passion for what we do.`
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1 flex justify-center">
          <img src="./img2.jpg" className="team-img w-80" alt="pic" />
          <h3>AMRITANSHU PRIYADARSHI</h3>
          <p>Team Leader</p>
        </div>
        <div className="col-span-1 flex justify-center">
          <img src="./img1.jpg" className="team-img" alt="pic" />
        </div>
        <div className="col-span-1 flex justify-center">
          <img src="./img5.jpg" className="team-img" alt="pic" />
        </div>
      </div>
    </div>
    // <section className="section-white">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12 text-center">
    //         <h1 className="section-title w-screen underline text-3xl pb-4">
    //           The Team Behind UNITRENDS
    //         </h1>
    //         <p className="section-subtitle w-screen text-center px-16 text-xl">
    //           At Unitrends Merchitects, we're all about blending creativity and
    //           technology to craft spaces that make you go, "Wow!" . We're not
    //           just suits and blueprints. We're a bunch of architects, designers,
    //           and project wizards who eat, sleep, and breathe creativity. We're
    //           a fun-loving crew with a serious passion for what we do.`
    //         </p>
    //       </div>
    //       <div>
    //         <div className="col-sm-6 col-md-4">
    //           <div className="team-item ">
    //
    //             {/* <img src="./img2.jpg" className="team-img " alt="pic" /> */}
    //             <h3>AMRITANSHU PRIYADARSHI</h3>
    //             <div className="team-info">
    //
    //               <p>
    //               He leads our dynamic team with a fresh perspective and boundless energy. Despite being in our inaugural year, he's passion for technology and her natural leadership abilities have already set us on a path to success.Amritanshu is committed to nurturing talent and driving innovation within our growing team.
    //               </p>

    //               <ul className="team-icon">
    //                 <li>
    //                   <a href="#" className="twitter">
    //                     <i className="fa fa-twitter"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="pinterest">
    //                     <i className="fa fa-pinterest"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="facebook">
    //                     <i className="fa fa-facebook"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="github">
    //                     <i className="fa fa-github"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-sm-6 col-md-4">
    //           <div className="team-item">
    //             <div className="w-screen h-1/2  flex justify-center">
    //               <img src="./img1.jpg" className="team-img " alt="pic" />
    //             </div>
    //             <h3>SHASHANK KUMAR</h3>
    //             <div className="team-info">
    //               <p>Team Member</p>
    //               <p>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Earum nisi dicta deleniti, quaerat aliquid suscipit
    //                 explicabo facilis? Odio praesentium placeat exercitationem
    //                 possimus. Perspiciatis nemo praesentium eum quidem odit
    //                 aliquid et.
    //               </p>

    //               <ul className="team-icon">
    //                 <li>
    //                   <a href="#" className="twitter">
    //                     <i className="fa fa-twitter"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="pinterest">
    //                     <i className="fa fa-pinterest"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="facebook">
    //                     <i className="fa fa-facebook"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="github">
    //                     <i className="fa fa-github"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-sm-6 col-md-4 ">
    //           <div className="team-item">
    //             <div className="w-screen h-1/2  flex justify-center">
    //               <img src="./img5.jpg" className="team-img " alt="pic" />
    //             </div>
    //             <h3>TANISH MORAL</h3>
    //             <div className="team-info">
    //               <p>Team Member</p>
    //               <p>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                 Earum nisi dicta deleniti, quaerat aliquid suscipit
    //                 explicabo facilis? Odio praesentium placeat exercitationem
    //                 possimus. Perspiciatis nemo praesentium eum quidem odit
    //                 aliquid et.
    //               </p>

    //               <ul className="team-icon">
    //                 <li>
    //                   <a href="#" className="twitter">
    //                     <i className="fa fa-twitter"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="pinterest">
    //                     <i className="fa fa-pinterest"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="facebook">
    //                     <i className="fa fa-facebook"></i>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" className="github">
    //                     <i className="fa fa-github"></i>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-sm-6 col-md-4">
    //         <div className="team-item">
    //           <div className="w-screen h-1/2  flex justify-center">
    //             <img src="./img4.jpg" className="team-img " alt="pic" />
    //           </div>
    //           <h3>PIYUSH NAYAK</h3>
    //           <div className="team-info">
    //             <p>Team Member</p>
    //             <p>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
    //               nisi dicta deleniti, quaerat aliquid suscipit explicabo
    //               facilis? Odio praesentium placeat exercitationem possimus.
    //               Perspiciatis nemo praesentium eum quidem odit aliquid et.
    //             </p>

    //             <ul className="team-icon">
    //               <li>
    //                 <a href="#" className="twitter">
    //                   <i className="fa fa-twitter"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="pinterest">
    //                   <i className="fa fa-pinterest"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="facebook">
    //                   <i className="fa fa-facebook"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="github">
    //                   <i className="fa fa-github"></i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-sm-6 col-md-4">
    //         <div className="team-item">
    //           <div className="w-screen h-1/2  flex justify-center">
    //             <img src="./img3.jpg" className="team-img " alt="pic" />
    //           </div>
    //           <h3>ARUN KUMAR SWAMI</h3>
    //           <div className="team-info">
    //             <p>Team Member</p>
    //             <p>
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
    //               nisi dicta deleniti, quaerat aliquid suscipit explicabo
    //               facilis? Odio praesentium placeat exercitationem possimus.
    //               Perspiciatis nemo praesentium eum quidem odit aliquid et.
    //             </p>

    //             <ul className="team-icon">
    //               <li>
    //                 <a href="#" className="twitter">
    //                   <i className="fa fa-twitter"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="pinterest">
    //                   <i className="fa fa-pinterest"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="facebook">
    //                   <i className="fa fa-facebook"></i>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="#" className="github">
    //                   <i className="fa fa-github"></i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Service;
