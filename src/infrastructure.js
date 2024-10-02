import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Infrastructure() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Infrastructure Management Services</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Infrastructure Management Services</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Infrastructure  <br />Management Services</h3>
            <div className="our-story p-4">

              <p className="font-sz">Infrastructure management services are essential for organizations to maintain the availability, performance, security, and resilience of their IT infrastructure, enabling them to support business operations, drive innovation, and achieve their strategic objectives effectively </p>
                
                <p className="font-sz">
                Infrastructure management services (IMS) refer to the outsourced management and support of an organization's IT infrastructure, including hardware, software, networks, and related components. These services are typically provided by specialized IT service providers or managed service providers (MSPs) to help organizations optimize their IT operations, reduce costs, improve performance, and enhance security.
                </p>
               
                <p className="font-sz">
                It plays a crucial role in ensuring the reliability, performance, security, and scalability of an organization's IT infrastructure.
                </p>
                



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/menagement.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


    </main>
    <Footer/>
    </>
  )
}

export default Infrastructure;
