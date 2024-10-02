import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';


function Governance() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Governance</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Governance</li>
        </ol>

      </div>
    </div>


    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">

          <div class="col-lg-6">
            <h3>Governance</h3>
            <div class="our-story p-4">

              <p class="font-sz">Effective data governance is essential for organizations to harness the full potential of their data assets, mitigate risks, and maintain trust and credibility with stakeholders in an increasingly data-driven business environment </p>
                
                <p class="font-sz">Data governance is a set of processes, policies, standards, and controls that ensure the effective and responsible management of an organization's data assets throughout their lifecycle. It encompasses the practices and frameworks for managing data quality, availability, usability, integrity, and security to meet the organization's business objectives and regulatory requirements</p>
                
             
                <p class="font-sz">
                Data governance is essential for ensuring that data assets are managed as valuable organizational assets, enabling organizations to maximize the value of their data, mitigate risks, and achieve their business objectives in a data-driven world
                </p>
                
           



            </div>
          </div>

            
            <div class="col-lg-6">
            <img src="assets/img/governance.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Governance;
