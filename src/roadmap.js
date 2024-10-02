import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Roadmap() {
  return (
  <>
  <main id="main">
  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Roadmap</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Roadmap</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Data Roadmap</h3>
            <div className="our-story p-4">

              <p className="font-sz">Since data roadmap is a strategic plan that outlines the steps and milestones for achieving specific data-related objectives within an organization. It is a structured approach to managing data initiatives and aligning them with broader business goals </p>
                
                <p className="font-sz">
                Data roadmap is a strategic plan that outlines the steps an organization will take to achieve its data-related goals and objectives over a defined period. It serves as a guiding document that aligns the organization's data initiatives with its broader business strategy. A data roadmap provides a structured approach to managing and leveraging data as a strategic asset to drive business success.
                </p>
               
                
                <p className="font-sz">
                It provides a strategic framework for organizations to harness the full potential of their data assets and drive innovation, efficiency, and competitiveness in today's data-driven world. It enables organizations to navigate the complexities of managing and leveraging data effectively and to realize tangible business value from their data investments.
                </p>



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/roadmap.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

  </main>
  <Footer/>
  </>
  )
}

export default Roadmap
