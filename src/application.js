import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Application() {
  return (
   <>
    <main id="main">

    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Application Management Services</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Application Management Services</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Application Management Services</h3>
            <div className="our-story p-4">

              <p className="font-sz">Application management services play a important role in helping organizations maximize the value of their applications, optimize IT operations, and achieve their business objectives effectively. By outsourcing application management to experienced service providers, organizations can focus on their core business activities while leveraging specialized expertise and resources to ensure the success of their applications </p>
                <p className="font-sz">
                
                Application Management Services (AMS) refer to services provided by a third-party to manage and maintain an organization's software applications. These services encompass a range of activities related to the ongoing operation, support, and enhancement of software applications throughout their lifecycle. 
                </p>
                
             
                
                <p className="font-sz">
                AMS allows organizations to focus on their core business activities while leveraging the expertise and resources of third party to effectively manage and support their software applications. It provides scalability, flexibility, and cost-effectiveness of non-core activities to specialized service providers. AMS can be particularly beneficial for organizations at skills shortages, or challenges in managing complex application environments
                </p>
                
            



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/application.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


    </main>
    <Footer/>
   </>
  )
}

export default Application;
