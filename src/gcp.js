import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Gcp() {
  return (
  <>
  <main id="main">

  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Google Cloud Platform (GCP)</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Google Cloud Platform (GCP)</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Google Cloud Platform (GCP)</h3>
            <div className="our-story p-4">

              <p className="font-sz"> GCP offers a comprehensive set of cloud services and solutions to help organizations innovate, scale, and transform their businesses in the cloud. With its global network infrastructure, advanced AI and machine learning capabilities, and integration with Google's ecosystem of products and services, our team provides a flexible and reliable platform solutions for building and managing applications and services across diverse industries</p>
                <p className="font-sz">
                Google Cloud Platform (GCP), which is a suite of cloud computing services offered by Google. GCP provides a wide range of infrastructure and platform services that enable users to build, deploy, and scale applications and services on Google's infrastructure.
                </p>
                <p className="font-sz">
                Core services provided by GCP are compute, Storage, databases, networking, ML & AI, analytics, IOT, developer tools, security and identity
                </p>
            

            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/gcp.jpg" style={{width:"100%"}} />
            {/* <img src="assets/img/gcp.jpg" width="100%"> */}
            
          </div>

            
            
            
        </div>

      </div>
    </section>


  </main>
    <Footer/>
    </>
  )
}

export default Gcp;
