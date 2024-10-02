import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Insurance() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Insurance</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Insurance</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">

          <div className="col-lg-6">
            <h3>Insurance</h3>
            <div className="our-story p-4">

              <p className="font-sz">Insurance industry plays a critical role in providing financial protection, promoting economic stability, and facilitating risk management for individuals, businesses, and society as a whole. By pooling risks and spreading losses, insurance helps individuals and organizations mitigate financial risks and uncertainties and recover from unexpected events and disasters</p>
                <p className="font-sz">
                Insurance is a financial arrangement in which an individual or entity (the policyholder) pays a premium to an insurance company in exchange for protection against specified risks or losses. In the event of a covered loss or event, the insurance company agrees to provide financial compensation or benefits to the policyholder or designated beneficiaries, as outlined in the insurance policy
                </p>
                <p className="font-sz">
                 The insurance industry relies heavily on IT to manage policy administration, claims processing, underwriting, risk assessment, customer service, marketing, and other core operations.
                </p>
              
           


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/Insurance.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

   </main>
   <Footer/>
   </>
  )
}

export default Insurance;
