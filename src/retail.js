import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';


function Retail() {
  return (
    <>
     <main id="main">
     <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Retail</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Retail</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Retail</h3>
            <div className="our-story p-4">

              <p className="font-sz">Retail industry is undergoing rapid transformation driven by technological advancements, changing consumer behavior, and evolving market dynamics. Successful retailers must adapt to these changes, innovate their business models, and prioritize customer-centric strategies to thrive in today's competitive retail landscape </p>
                
                <p className="font-sz">
                It is the process of selling goods or services to consumers through various channels, including physical stores, online platforms, and mobile apps. It encompasses the entire journey from the manufacturer or wholesaler to the end consumer, involving activities such as product sourcing, inventory management, merchandising, marketing, sales, and customer service
                </p>
              
                
                <p className="font-sz">
                Retail is a dynamic and competitive industry that is continually evolving in response to changing consumer preferences, technological advancements, and market trends. Successful retailers adapt to these changes by embracing innovation, investing in technology, and focusing on delivering value to customers.
                </p>
                


      </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/retail.png" style={{width:"100%"}} />
          
            
          </div>

            
            
            
        </div>

      </div>
    </section>

     </main>
    
    <Footer/>
    </>
  )
}

export default Retail;
