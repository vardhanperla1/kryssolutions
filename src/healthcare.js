import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Healthcare() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Health Care</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Health Care</li>
        </ol>

      </div>
    </div>

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">


          <div class="col-lg-6">
            <h3>Health Care</h3>
            <div class="our-story p-4">

              <p class="font-sz">Healthcare industry is driven by a complex ecosystem of stakeholders, technologies, regulations, and societal factors. It plays a vital role in addressing the healthcare needs of individuals and populations, promoting wellness, preventing disease, and advancing medical science and innovation</p>
                
                <p class="font-sz">
                Healthcare refers to the maintenance or improvement of health through the prevention, diagnosis, treatment, and management of illness, injury, disease, and other physical and mental impairments in humans. It encompasses a wide range of services, professions, facilities, technologies, and products aimed at promoting and maintaining health and well-being.
                </p>
               
                <p class="font-sz">
                Healthcare IT refers to the use of technology, software, and digital solutions to improve the delivery, management, and outcomes of healthcare services. Healthcare IT encompasses a broad range of applications, systems, and tools designed to support healthcare providers, patients, and other stakeholders in the healthcare ecosystem.
                </p>
              
                


            </div>
          </div>

            
            <div class="col-lg-6">
            <img src="assets/img/healthcare.jpg" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Healthcare;
