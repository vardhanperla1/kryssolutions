import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Strategy() {
  return (
    <>
     <main id="main">
     <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Strategy</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Strategy</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Strategy</h3>
            <div className="our-story p-4">

              <p className="font-sz">It helps organizations to well-define data strategy that aligns with their organization's business goals and enables it to harness the full potential of its data assets to drive innovation, improve decision-making, and create value. </p>
                <p className="font-sz">
                A data strategy is a comprehensive plan or roadmap that outlines an organization's approach to managing, analyzing, and leveraging data to achieve its business objectives. It defines the processes, technologies, policies, and governance structures needed to effectively collect, store, process, and utilize data across the organization.
                </p>
                <p className="font-sz">
                A robust data strategy includes business goals and objectives, data governance, data architecture, data management, analytics and insights, data culture and organization, technology and tools, measurement and continuous improvement
                </p>
                <p className="font-sz">
                Data strategy provides a framework for organizations to harness the power of data as a strategic asset and drive business success in the digital age. It enables organizations to unlock the value of their data, gain insights into their operations and customers, and stay competitive in a data-driven world.
                </p>
                
         


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/strategy.jpg" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


     </main>
    <Footer/>
    </>
  )
}

export default Strategy;
