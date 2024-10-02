import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';


function Crm() {
  return (
    <>
    <main id="main">
    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Customer Relationship Management (CRM)</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Customer Relationship Management (CRM)</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Customer Relationship Management (CRM)</h3>
            <div className="our-story p-4">

              <p className="font-sz">Over the decades CRM is playing a critical role in helping organizations build strong and lasting relationships with customers, improve customer satisfaction and loyalty, increase sales and revenue, and gain a competitive advantage in today's market. By leveraging CRM technology and best practices, organizations can better understand their customers' needs, deliver personalized experiences, and drive business growth. </p>
                
                <p className="font-sz">
                Customer Relationship Management. It refers to a set of practices, strategies, and technologies that businesses use to manage and analyze interactions with current and potential customers throughout the customer lifecycle, with the goal of improving customer relationships, retaining customers, and driving sales growth.
                </p>
               
                <p className="font-sz">
                CRM systems plays a critical role in helping businesses build and maintain strong relationships with their customers, improve sales and marketing effectiveness, and drive business growth. By centralizing customer data, automating processes, and providing insights into customer behavior, CRM systems empower businesses to deliver exceptional customer experiences and stay competitive in the dynamic marketplace.
                
                </p>
            


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/crm.png" style={{width:"100%"}} />
          
            
          </div>

            
            
            
        </div>

      </div>
    </section>


    </main>
    <Footer/>
    </>
  )
}

export default Crm;
