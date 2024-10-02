import React from 'react';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Manufacturing() {
  return (
   <>
   <main id="main">
   <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')"}}>
      <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Manufacturing</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
           <li>Manufacturing</li>
        </ol>

      </div>
    </div>

    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row position-relative">


          <div className="col-lg-6">
            <h3>Manufacturing</h3>
            <div className="our-story p-4">

              <p className="font-sz">Manufacturing industry plays a critical role in driving economic growth, innovation, and technological advancement across various sectors and industries. By continuously improving processes, adopting new technologies, and adapting to changing market demands, manufacturers can remain competitive and sustainable in an increasingly global and dynamic business environment</p>
                <p className="font-sz">
                Manufacturing is the process of converting raw materials, components, or parts into finished goods or products through various industrial processes, machinery, and labor. It involves the creation, assembly, or fabrication of tangible goods that meet specific design specifications, quality standards, and customer requirements
                </p>
                
                <p className="font-sz">
                Manufacturing in IT refers to the application of information technology (IT) solutions, systems, and tools to enhance and optimize manufacturing processes, operations, and activities in various industries. IT plays a crucial role in modern manufacturing by enabling automation, data-driven decision-making, process optimization, and integration of manufacturing systems with enterprise-wide business processes
                </p>
                
               
                


            </div>
          </div>

            
            <div className="col-lg-6">
            <img src="assets/img/manufacturing.jpg" style={{width:"100%"}} />
            
            
          </div>

            
            
            
        </div>

      </div>
    </section>

   </main>
   <Footer/>
   </>
  )
}

export default Manufacturing;
