import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <>
  <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>About</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>About</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">

          <div className="col-lg-7 about-img" style={{backgroundImage: "url('assets/img/about.jpg')"}}></div>

          <div className="col-lg-7">
            <h3>ABOUT KRYS SOLUTIONS</h3>
            <div className="our-story">

              <h3>Our Story</h3>
              <p style={{fontSize: '14px'}}><strong>VISION :</strong> At Krys Solutions, we envision a world where technology is not just a tool, but a transformative force that propels businesses forward. Our mission is to bridge the gap between ambition and achievement by providing strategic guidance, cutting-edge solutions, and unparalleled support to our clients.</p>
                <p style={{fontSize: '14px'}}><strong>MISSION :</strong> Our mission is to empower your business with the tools and strategies needed to thrive in todays rapidly evolving digital landscape. Whether you’re looking to optimize your existing IT infrastructure, implement a new technology, or explore innovative ways to streamline your operations, KRYS solutions is here to guide you every step of the way</p>
    
                </div>
          </div>

        </div>

      </div>
    </section>

    <section id="alt-services" className="alt-services">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-around gy-4">
        <div className="col-lg-6 img-bg" data-aos="zoom-in" data-aos-delay="100">
          
          <img src="assets/img/alt-services.jpg" style={{width:"100%"}} />
          {/* assets/img/alt-services.jpg */}
          </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h3>ABOUT KRYS SOLUTIONS</h3>
          <p>At KRYS Solutions, we have a team of highly skilled and experienced IT and Data consultants who specialize in a wide range of areas, including AI/ML, Quantum computing, Cloud computing, Cybersecurity, Networking, Data analytics and more. Our expertise allows us to provide our clients with the best possible solutions for their needs.</p>
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100"> <i className="bi bi-easel flex-shrink-0"></i>
            <div>
              <h4><a href="" className="stretched-link">OUR APPROACH</a></h4>
              <p>We believe that every business is unique, and therefore requires a customized approach to their IT and Data landscape. That's why we take time to understand our clients' specific needs and challenges, and we develop tailored solutions that meet their unique requirements.</p>
            </div>
          </div>
          
          
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200"> <i className="bi bi-patch-check flex-shrink-0"></i>
            <div>
              <h4><a href="" className="stretched-link">INNOVATIVE IT SOLUTIONS FOR YOUR BUSINESS</a></h4>
              <p>Discover KRYS Solutions innovative IT & Data solutions for your  business. Our team of experts provides comprehensive technology services to help streamline your operations and boost productivity. Contact us today to learn more.</p>
            </div>
          </div>
          
          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300"> <i className="bi bi-brightness-high flex-shrink-0"></i>
            <div>
              <h4><a href="" className="stretched-link">ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</a></h4>
              <p>Our team of experts would help create, develop  and deploy custom AI and ML models for our clients and customize them as per their business needs and provide necessary guidance to achieve business goals. </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>

    </main>
    <Footer/>
    </>
  )
}

export default Aboutus;
