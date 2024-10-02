import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Cloudservices() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Azure</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Azure</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Azure</h3>
            <div className="our-story p-4">

              <p className="font-sz"> Azure offers a comprehensive set of cloud services and solutions to help organizations innovate, scale, and transform their businesses in the cloud. With its global footprint, hybrid capabilities, and integration with Microsoft's ecosystem of products and services, We provide a flexible and reliable platform solutions for building and managing applications and services across diverse industries and use cases.</p>
                
                <p className="font-sz">
                Azure is a cloud computing platform and service offered by Microsoft. It provides a wide range of cloud services, including computing, analytics, storage, networking, databases, machine learning, artificial intelligence, IoT (Internet of Things), and more. Azure enables businesses to build, deploy, and manage applications and services through Microsoft's global network of data centers.
                </p>
                
                <p className="font-sz">
                Core services provided by Azure are compute, Storage, databases, networking, ML & AI, analytics, IOT, developer tools, security and identity
                </p>
                



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/azure.jpg" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>



   </main>
   <Footer/>
   </>
  )
}

export default Cloudservices
