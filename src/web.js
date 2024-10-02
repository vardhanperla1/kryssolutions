import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';
function web() {
  return (
    <>
    
    
<section id="hero" className="hero"> 
  

  
  <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
    <div className="carousel-item active" style={{backgroundImage: "url('assets/img/hero-carousel/hero-carousel-1.jpg')"}}>
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">Welcome to <span>KRYS Solutions</span></h2>
              <p data-aos="fade-up">At KRYS Solutions, we have a team of highly skilled and experienced IT and Data consultants who specialize in a wide range of areas, including AI/ML, Quantum computing, Cloud computing, Cybersecurity, Networking, Data analytics and more.</p>
              <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">Get More</a> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: "url('assets/img/hero-carousel/hero-carousel-2.jpg')"}}>
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">ARTIFICIAL INTELLIGENCE</h2>
              <p data-aos="fade-up">Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction.  </p>
              <Link to="/artificialintelligence" data-aos="fade-up" data-aos-delay="200" className="btn-get-started">Get More</Link> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: "url('assets/img/hero-carousel/hero-carousel-3.jpg')"}}>
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">MACHINE LEARNING</h2>
              <p data-aos="fade-up">Machine learning (ML) is a subset of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data. </p>
              <Link to="/machinelearning" data-aos="fade-up" data-aos-delay="200" className="btn-get-started">Get More</Link> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: "url('assets/img/hero-carousel/hero-carousel-4.jpg')"}}>
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">CYBER SECURITY</h2>
              <p data-aos="fade-up">Our cybersecurity and risk management services help protect businesses from cyber threats and data breaches. We offer a range of services, including risk assessments, security audits, and incident response planning to help you stay ahead of the latest threats. </p>
              <Link to="/cybersecurity" data-aos="fade-up" data-aos-delay="200" className="btn-get-started">Get More</Link> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" style={{backgroundImage: "url('assets/img/hero-carousel/hero-carousel-5.jpg')"}}>
    {/* // background-image: url(assets/img/hero-carousel/hero-carousel-5.jpg */}
      <div className="info d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 data-aos="fade-down">CLOUD SERVICES</h2>
              <p data-aos="fade-up">Cloud  provides a comprehensive suite of computing services and solutions, for startups and small businesses to large enterprises and government agencies. With its global infrastructure, scalability, reliability, and breadth of services, we enable organizations to innovate, accelerate time-to-market, and scale their businesses efficiently in the cloud. </p>
              <Link to="/aws" data-aos="fade-up" data-aos-delay="200" className="btn-get-started">Get More</Link> </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev"> <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span> </a> <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next"> <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span> </a> </div>
</section>

<main id="main"> 
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
  
  <section id="services" className="services section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Services</h2>
        <p>Krys Solutions is your trusted partner in navigating the dynamic landscape of technology. As an IT consulting firm, we specialize in delivering innovative ideas that empower businesses to thrive in the digital era.</p>
      </div>
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/ai.jpg" alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              <div className="flip-card-back">
                <h3>Artificial Intelligence</h3>
                  <p>AI is driving significant transformation and innovation in the IT industry, empowering organizations to achieve operational excellence, enhance security, and deliver superior products and services in an increasingly digital and interconnected world</p>
                    
                    <Link to="/artificialintelligence"><button type="button" className="btn btn-primary">Read More..</button></Link>
                   
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/ml.jpg"  alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              {/* "assets/img/ml.jpg" */}
              <div className="flip-card-back">
                <h3>Machine Learning</h3>
                  <p>Machine learning has become a foundational technology in various industries, driving innovation, automation, and data-driven decision-making. Its capabilities continue to expand, fueling advancements in AI and reshaping the way we interact with technology</p>
                 
                      <Link to="/machinelearning"><button type="button" className="btn btn-primary">Read More..</button></Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/cloud.jpg"  alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              {/* "assets/img/cloud.jpg" */}
              <div className="flip-card-back">
                <h3>Cloud Service</h3>
                  <p>Cloud provides a comprehensive suite of computing services and solutions, for startups and small businesses to large enterprises and government agencies. With its global infrastructure, scalability, reliability, and breadth of services, we enable organizations to innovate, accelerate time-to-market, and scale their businesses efficiently in the cloud.</p>
                  
                      <Link to="/aws"><button type="button" className="btn btn-primary">Read More..</button></Link>    
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/web.jpg"  alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              {/* "assets/img/web.jpg" */}
              <div className="flip-card-back">
                <h3>WebApp Development</h3>
                  <p>Web application development is the process of designing, building, testing, and deploying web-based applications delivered to users or customers via the internet. Users can access the application and its functions and services using any web browser </p>
                   
                      <Link to="/webAppdevelopment"><button type="button" className="btn btn-primary">Read More..</button></Link> 
                      
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/cyber.jpg"  alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              {/* "assets/img/cyber.jpg" */}
              <div className="flip-card-back">
                <h3>Cyber Security</h3>
                  <p>Cybersecurity is a dynamic and complex field that requires continuous vigilance, adaptation, and collaboration among stakeholders to address evolving cyber threats and safeguard digital assets and infrastructure. By adopting a proactive and comprehensive approach to cybersecurity, organizations can better protect themselves against cyber risks and minimize the impact of security incidents.</p>
                  
                      <Link to="/cybersecurity"><button type="button" className="btn btn-primary">Read More..</button></Link> 
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front"> <img src="assets/img/dgitals.jpg"  alt="Avatar" style={{width:"100%", height:"50vh"}} /> </div>
              {/* assets/img/dgitals.jpg */}
              <div className="flip-card-back">
                <h3>Digital Marketing</h3>
                  <p className="px-1">Digital marketing offers businesses a powerful and cost-effective way to reach and engage audiences, drive brand awareness, and achieve marketing objectives in today's digital age. By leveraging the right mix of digital marketing channels and strategies, organizations can effectively connect with their target audience, drive traffic and leads, and ultimately, grow their business online.</p>
                   
                      <Link to="/digitalmarketing"><button type="button" className="btn btn-primary">Read More..</button></Link>
              </div>
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

export default web;
