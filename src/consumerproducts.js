import React from 'react'
import Footer from './footer';
import { Link } from 'react-router-dom';

function Consumerproducts() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Consumer Products</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Consumer Products</li>
        </ol>

      </div>
    </div>

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row position-relative">


          <div class="col-lg-6">
            <h3>Consumer Products</h3>
            <div class="our-story p-4">

              <p class="font-sz">Consumer products industry plays a vital role in meeting the needs and preferences of consumers, driving economic activity, and shaping lifestyles and cultures around the world. By staying agile, responsive to consumer demands, and innovative in product development and marketing strategies, consumer products companies can thrive in a competitive and dynamic marketplace</p>
                <p class="font-sz">
                Consumer products are tangible goods that are purchased and used by individuals or households for personal consumption or use. These products are manufactured and sold in large quantities to meet the needs, preferences, and lifestyles of consumers across various demographics, income levels, and geographic regions. Consumer products encompass a wide range of categories and types, including everyday necessities, discretionary items, durables, perishables, and non-durables, catering to diverse consumer demands and preferences
                </p>
                <p class="font-sz">
                Consumer products in IT refer to tangible goods that incorporate information technology (IT) components, features, or functionalities to enhance their functionality, connectivity, and user experience. It leverages technology to deliver innovative features, connectivity, and functionality that enhance convenience, efficiency, and user experience in various aspects of daily life. IT integration into consumer products enables automation, connectivity, data analytics, and digital interactions, driving the adoption of smart, connected devices that offer advanced capabilities and benefits to consumers.
                </p>
                



            </div>
          </div>

            
            <div class="col-lg-6">
            <img src="assets/img/Consumer Products.png" style={{width:"100%"}} />
           
            
          </div>

            
            
            
        </div>

      </div>
    </section>
    </main>
   <Footer/>
   </>
  )
}

export default Consumerproducts;
