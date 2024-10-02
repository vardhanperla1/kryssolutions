import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Digitalmarketing() {
  return (
  <>
  <main id="main">
  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Digital Marketing</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Digital Marketing</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Digital Marketing</h3>
            <div className="our-story p-4">

              <p className="font-sz">Digital marketing offers businesses a powerful and cost-effective way to reach and engage audiences, drive brand awareness, and achieve marketing objectives in today's digital age. By leveraging the right mix of digital marketing channels and strategies, organizations can effectively connect with their target audience, drive traffic and leads, and ultimately, grow their business online. </p>
                <p className="font-sz">
                Digital marketing is the use of digital channels, platforms, and technologies to promote products, services, brands, or ideas to a target audience. It encompasses a wide range of tactics and strategies aimed at reaching and engaging customers online, driving website traffic, generating leads, and ultimately, converting leads into customers. Digital marketing leverages various digital channels, including search engines, social media, email, content marketing, and online advertising, to connect with potential customers and build relationships with them
                </p>
               
                <p className="font-sz">
                It allows businesses reach to global audience, target specific demographics, track and measure campaign performance, and optimize marketing efforts in real-time. It requires ongoing monitoring, analysis, and adaptation to keep pace with changing consumer behaviors, technology trends, and market dynamics.
                </p>
            


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/marketing.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

  </main>
  <Footer/>
  </>
  )
}

export default Digitalmarketing;
