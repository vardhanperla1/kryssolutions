import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Cybersecurity() {
  return (
  <>
  <main id="main">
  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Cyber Security & Risk Management</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Cyber Security & Risk Management</li>
        </ol>

      </div>
    </div>

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">


          <div class="col-lg-6">
            <h3>Cyber Security & Risk Management </h3>
            <div class="our-story p-4">

              <p class="font-sz">Our cybersecurity and risk management services help protect businesses from cyber threats and data breaches. We offer a range of services, including risk assessments, security audits, and incident response planning to help you stay ahead of the latest threats.</p>
                <p class="font-sz">Cybersecurity is a dynamic and complex field that requires continuous vigilance, adaptation, and collaboration among stakeholders to address evolving cyber threats and safeguard digital assets and infrastructure. By adopting a proactive and comprehensive approach to cybersecurity, organizations can better protect themselves against cyber risks and minimize the impact of security incidents.</p>
                
              
 
<p class="font-sz">
Cybersecurity in IT involves a comprehensive approach to protecting digital assets, infrastructure, and operations from cyber threats to maintain confidentiality, integrity, and availability of information and systems</p>
           



            </div>
          </div>

            
            <div class="col-lg-6">
            <img src="assets/img/Cyber Security.png" style={{width:"100%"}} />
            
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


  </main>

  <Footer/>
  </>
  )
}

export default Cybersecurity;
