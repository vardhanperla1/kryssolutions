import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function WebAppdevelopment() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>WebApp Development</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>WebApp Development</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>WebApp Development</h3>
            <div className="our-story p-4">

              <p className="font-sz"> Web application development is the process of designing, building, testing, and deploying web-based applications delivered to users or customers via the internet. Users can access the application and its functions and services using any web browser </p>
                <p className="font-sz">
                Web application development refers to the process of creating software applications that run on web browsers. These applications are accessed through the internet and can be used on various devices, including desktop computers, laptops, tablets, and smartphones. Web applications utilize web technologies such as HTML, CSS, and JavaScript to provide interactive and dynamic user experiences.
                </p>
                <p className="font-sz">
                Stages of webapp development includes planning and requirement gathering, design, front-end development, back-end development, database integration, testing, deployment and maintenance 
                </p>
                <p className="font-sz">
                Web application development can vary in complexity, from simple static websites to complex, interactive web applications with real-time features and extensive backend functionality. 
                </p>
                
          



            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/web.png" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

   </main>
   <Footer/>
   </>
  )
}

export default WebAppdevelopment;
