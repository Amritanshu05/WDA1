import React from "react";
import "./Service.css";
import img1 from './pic/img2.jpg';
import img2 from './pic/img1.jpg';
import img3 from './pic/img5.jpg';
import img4 from './pic/img4.jpg';
import img5 from './pic/img3.jpg';
import  "https://kit.fontawesome.com/7423a8371d.js" ;
    

const Service = () =>  {
  let message = `At Unitrends Merchitects, we're all about blending creativity and technology to craft spaces that make you go, "Wow!" . We're not just suits and blueprints. We're a bunch of architects, designers, and project wizards who eat, sleep, and breathe creativity. We're a fun-loving crew with a serious passion for what we do.`;
  return (
    <section className="section-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="section-title">The Team Behind UNITRENDS</h1>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={img1} className="team-img" alt="pic" />
              <h3>AMRITANSHU PRIYADERSHI</h3>
              <div className="team-info">
                <p>Team Leader</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nisi dicta deleniti, quaerat aliquid suscipit explicabo
                  facilis? Odio praesentium placeat exercitationem possimus.
                  Perspiciatis nemo praesentium eum quidem odit aliquid et.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={img2} className="team-img" alt="pic" />
              <h3>SHASHANK KUMAR</h3>
              <div className="team-info">
                <p>Team Member</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nisi dicta deleniti, quaerat aliquid suscipit explicabo
                  facilis? Odio praesentium placeat exercitationem possimus.
                  Perspiciatis nemo praesentium eum quidem odit aliquid et.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={img3} className="team-img" alt="pic" />
              <h3>TANISH MORAL</h3>
              <div className="team-info">
                <p>Team Member</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nisi dicta deleniti, quaerat aliquid suscipit explicabo
                  facilis? Odio praesentium placeat exercitationem possimus.
                  Perspiciatis nemo praesentium eum quidem odit aliquid et.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>  

        <div className="row">

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={img4} className="team-img" alt="pic" />
              <h3>PIYUSH NAYAK</h3>
              <div className="team-info">
                <p>Team Member</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nisi dicta deleniti, quaerat aliquid suscipit explicabo
                  facilis? Odio praesentium placeat exercitationem possimus.
                  Perspiciatis nemo praesentium eum quidem odit aliquid et.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img src={img5} className="team-img" alt="pic" />
              <h3>ARUN KUMAR SWAMI</h3>
              <div className="team-info">
                <p>Team Member</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  nisi dicta deleniti, quaerat aliquid suscipit explicabo
                  facilis? Odio praesentium placeat exercitationem possimus.
                  Perspiciatis nemo praesentium eum quidem odit aliquid et.
                </p>

                <ul className="team-icon">
                  <li>
                    <a href="#" className="twitter">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="facebook">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="github">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
}


export default Service;
