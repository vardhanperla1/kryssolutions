import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Quantum() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Quantum Computing</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Quantum Computing</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Quantum Computing</h3>
            <div className="our-story p-4">

              <p className="font-sz">Quantum computing holds tremendous promise for solving complex problems that are intractable for classical computers, it is still an evolving field with many open questions and challenges to address. Continued research and development efforts are essential to realizing the full potential of quantum computing and unlocking its transformative impact on science, technology, and society. </p>
                
                <p className="font-sz">
                Quantum computing is an emerging field of computing that harnesses the principles of quantum mechanics to process and manipulate information in fundamentally different ways than classical computers. While classical computers use bits as the basic unit of information, quantum computers use quantum bits, or qubits, which can exist in multiple states simultaneously due to a property called superposition.
                </p>
                <p className="font-sz">
                Important principles of quantum computing includes superposition, entanglement,  quantum interference
                </p>
                
                <p className="font-sz">
                Despite the promising potential of quantum computing, practical quantum computers are still in the early stages of development and face significant technical challenges. Researchers and industry stakeholders are actively working to overcome these challenges and realize the full potential of quantum computing in the coming years
                </p>
             


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/quantum.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>

    </main>
    <Footer/>
    </>
  )
}

export default Quantum;
