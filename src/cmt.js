import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Cmt() {
  return (
    <>
      <main id="main">
      <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>CMT (Communication, Media & Technology)</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>CMT (Communication, Media & Technology)</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>CMT (Communication, Media & Technology)</h3>
            <div className="our-story p-4">

              <p className="font-sz">CMT industry plays a significant role in the global economy, providing employment opportunities, driving innovation and creativity, and satisfying consumer demand for clothing, textiles, and fashion-related products. By embracing sustainability, adopting technology, and responding to evolving consumer preferences, the CMT industry can continue to thrive and adapt to changing market dynamics</p>
                
                <p className="font-sz">
                Communication media and technology play a central role in shaping communication, collaboration, consume information, and interact in today's interconnected world. Advances in communication technologies continue to drive innovation, connectivity, and digital transformation across industries, revolutionizing how individuals, businesses, and societies communicate and interact in the digital age.
                </p>
                <p className="font-sz">
                In the IT industry, communication media and technology play a fundamental role in facilitating collaboration, information sharing, and connectivity among various stakeholders, including IT professionals, developers, clients, and end users. These communication tools and technologies enable seamless interaction, real-time collaboration, and efficient exchange of information within IT organizations and across the broader technology ecosystem
                </p>
          


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/cmt.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

      </main>
    <Footer/>
    </>
  )
}

export default Cmt;
