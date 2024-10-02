import React from 'react';

import Footer from './footer';
import { Link } from 'react-router-dom';

function Machinelearning() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Machine Learning</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Machine Learning</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">



          <div className="col-lg-6">
            <h3>Machine Learning</h3>
            <div className="our-story p-4">

              <p className="font-sz"> Machine learning has become a foundational technology in various industries, driving innovation, automation, and data-driven decision-making. Its capabilities continue to expand, fueling advancements in AI and reshaping the way we interact with technology</p>
                <p className="font-sz">
                Machine learning (ML) is a subset of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to learn from and make predictions or decisions based on data. Instead of being explicitly programmed to perform a specific task, ML algorithms use patterns and inference to learn from data and improve over time.
                </p>
                <p className="font-sz">
                Machine learning has a wide range of applications across various domains, including healthcare, finance, marketing, computer vision, natural language processing, and autonomous systems. It powers many of the intelligent systems and services we encounter daily, from recommendation systems on e-commerce platforms to voice assistants on smartphone.
                </p>
                



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/machinelearnings.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>

    <Footer/>
    </>
  )
}

export default Machinelearning
