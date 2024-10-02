import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Utilities() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Utilities</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Utilities</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Utilities</h3>
            <div className="our-story p-4">

              <p className="font-sz">Utilities industry plays a critical role in supporting modern society by providing essential services that are essential for public health, economic development, and quality of life. By investing in infrastructure, adopting innovative technologies, and promoting sustainability practices, utilities can continue to meet the evolving needs of customers and communities while addressing environmental challenges and ensuring a reliable and resilient utility infrastructure</p>
                <p className="font-sz">
                Utilities refer to essential services that are provided to households, businesses, and industries to meet basic needs and support daily activities. Utilities are vital for maintaining modern infrastructure, enhancing quality of life, and facilitating economic activities. The term "utilities" typically encompasses various services related to energy, water, waste management, and telecommunications, which are essential for residential, commercial, and industrial purposes.
                </p>
                <p className="font-sz">
                Utilities in IT play a vital role in supporting and enhancing the functionality, performance, security, and management of IT infrastructure, systems, and resources. IT utilities enable organizations to optimize IT operations, improve productivity, mitigate risks, and deliver reliable and secure computing environments for users and stakeholders
                </p>
                



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/Utilities.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Utilities;
