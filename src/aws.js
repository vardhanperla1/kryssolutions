import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Aws() {
  return (
    <>
     <main id="main">
     <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Amazon Web Services (AWS)</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Amazon Web Services (AWS)</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Amazon Web Services (AWS)</h3>
            <div className="our-story p-4">

              <p style={{fontSize:'14px'}}> AWS provides a comprehensive suite of cloud computing services and solutions, for startups and small businesses to large enterprises and government agencies. With its global infrastructure, scalability, reliability, and breadth of services, we enable organizations to innovate, accelerate time-to-market, and scale their businesses efficiently in the cloud. </p>
                
                <p style={{fontSize:'14px'}}>
                AWS, provides on-demand cloud computing platforms and APIs (Application Programming Interfaces) to individuals, companies, and governments on a metered pay-as-you-go basis. It offers a wide range of cloud services, including computing power, storage options, networking capabilities, databases, machine learning, artificial intelligence, analytics, developer tools, security, and IoT (Internet of Things) solutions.
                </p>
                
                <p style={{fontSize:'14px'}}>
                Core services provided by AWS are compute, Storage, databases, networking, ML & AI, analytics, developer tools, security and identity 
                </p>
           



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/awsimg.jpg" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>


     </main>

     <Footer/>
    </>
  )
}

export default Aws;
