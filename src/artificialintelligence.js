import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Artificialintelligence() {
  return (
  <>
  <main id="main">

  <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Artificial Intelligence</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Artificial Intelligence</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">



          <div className="col-lg-6">
            <h3>Artificial Intelligence</h3>
            <div className="our-story p-4">

              <p className="font-sz"> AI is driving significant transformation and innovation in the IT industry, empowering organizations to achieve operational excellence, enhance security, and deliver superior products and services in an increasingly digital and interconnected world </p>
                <p className="font-sz">
                Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction.
                </p>
                
                
                <p className="font-sz">
                AI technologies rely on various methods and algorithms, including machine learning, deep learning, natural language processing, computer vision, and robotics. These techniques enable AI systems to analyze large amounts of data, identify patterns, make predictions, and adapt to new information without explicit programming.
                </p>
                
                <p className="font-sz">
                AI has numerous applications across various industries, including healthcare, finance, education, transportation, manufacturing, and entertainment. 
                </p>
                

            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/artificialintelligence1.png" style={{width:"100%"}} />
            {/* <img src="assets/img/artificialintelligence1.png" style={{width:"100%"}}> */}
            
          </div>

            
            
            
        </div>

      </div>
    </section>


  </main>

  <Footer/>
  </>
  )
}

export default Artificialintelligence
