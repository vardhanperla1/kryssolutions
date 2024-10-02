import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';


function Telecom() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Telecom</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Telecom</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Telecom</h3>
            <div className="our-story p-4">

              <p className="font-sz">Telecom industry plays a critical role in enabling communication, connectivity, and digital transformation in society and the economy. By embracing innovation, investing in infrastructure, and adapting to evolving technologies and market dynamics, telecom companies can drive connectivity and empower individuals and organizations to communicate and collaborate more effectively</p>
                
                <p className="font-sz">
                The telecom industry, short for the telecommunications industry, is a sector that encompasses companies and organizations involved in the provision of communication services, including voice, data, and multimedia transmission, over long distances using wired or wireless networks. The telecom industry plays a crucial role in enabling connectivity, communication, and information exchange among individuals, businesses, governments, and other entities worldwide, facilitating economic, social, and technological development.
                </p>
                <p className="font-sz">
                Telecom in IT is the convergence of telecommunications and information technology to enable advanced communication services, connectivity solutions, and digital experiences in the digital age. Telecom operators leverage IT infrastructure, software platforms, and digital technologies to build agile, scalable, and secure telecommunications networks, deliver innovative services, and meet the evolving needs and expectations of users and organizations in a connected world
                </p>
                
            



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/telecom.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Telecom;
