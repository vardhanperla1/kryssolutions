import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Automotive() {
  return (
    <>
     <main id="main">
     <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Automotive</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Automotive</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Automotive</h3>
            <div className="our-story p-4">

              <p className="font-sz">Automotive industry plays a significant role in driving economic growth, employment, and innovation worldwide. By embracing technological advancements, sustainability initiatives, and changing consumer preferences, automotive companies can continue to shape the future of transportation and mobility while addressing global challenges such as climate change and urbanization</p>
                
             
                
                <p className="font-sz">
                IT plays a crucial role in transforming automotive operations, manufacturing processes, vehicle design, customer experiences, and aftermarket services. The integration of IT into the automotive industry drives innovation, efficiency, and transformation across the entire automotive value chain, from vehicle design and manufacturing to sales, service, and customer experiences. IT solutions enable automakers, suppliers, and stakeholders to navigate digital disruption, embrace emerging technologies, and deliver next-generation vehicles and mobility solutions that meet evolving consumer demands and industry trends
                </p>
                
                



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/Automotive.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


     </main>
     <Footer/>
    </>
  )
}

export default Automotive;
