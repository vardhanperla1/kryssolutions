import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Banking() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Banking</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Banking</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Banking</h3>
            <div className="our-story p-4">

              <p className="font-sz">Banking industry serves as the backbone of the financial system, facilitating economic activities, allocating capital, and providing essential financial services that support economic growth, stability, and prosperity. By embracing innovation, fostering financial inclusion, and adhering to sound risk management practices, banks can continue to adapt and thrive in a rapidly evolving business environment</p>
                
                <p className="font-sz">
                Banking plays a vital role in the economy by providing essential financial services, fostering economic growth, facilitating capital formation, and supporting individual and business financial activities and transactions. Banks serve as intermediaries between savers and borrowers, allocating capital efficiently, managing risks, and contributing to the overall stability and prosperity of the financial system and society.
                
                </p>
                
                <p className="font-sz">
                Banking in IT refers to the intersection of the banking industry with information technology (IT) and digital technologies to enhance banking operations, improve customer experiences, and drive innovation in financial services. In the digital age, banks leverage IT solutions, software platforms, and digital channels to streamline processes, deliver personalized services, and meet the evolving needs and preferences of customers in an increasingly digital and interconnected world
                </p>
                
                
                
            



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/banking.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


   </main>
   <Footer/>
   </>
  )
}

export default Banking;
