import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Staffaugmentation() {
  return (
   <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Staff Augmentation</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Staff Augmentation</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Staff Augmentation</h3>
            <div className="our-story p-4">

              <p className="font-sz"> One of the most significant trends in today’s business is the dramatic increase in the use of contingent workers across organizations globally. Out of different contingent working models, the most common is staff augmentation. </p>
             <p className="font-sz">There is a wide range of scenarios in which companies leverage staff augmentation, including: 
                 </p>
              <p className="font-sz">
              <strong>Increased capacity:</strong>  Increase in labor to fulfill a temporary spike in everyday work (project work, increased production, spikes in customer demand, seasonal business, etc.)
              </p>
                
                   <p className="font-sz">
              <strong>Bridge to Hire:</strong>  For long-term needs, as a bridge to provide capacity while you hire a permanent team (new location, new line of business etc.)
              </p>
                
                  <p className="font-sz">
              <strong>Specialized Skills:</strong>  For out-of-house specialized skills that are required for a period (infra set up, SDLC experts, technology set up, etc.)
              </p>
                
                <p className="font-sz">
              <strong>Strategic:</strong>  Build an organization or team using at most entirely flexible labor to gain competitive advantage (increase speed to market, be more agile from a core skills point of view)
              </p>
                
              
                
                

            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/staffaugmentation.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>

    <Footer/>
   </>
  )
}

export default Staffaugmentation;
