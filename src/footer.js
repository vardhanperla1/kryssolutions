import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
 <>
 <footer id="footer" class="footer">

<div class="footer-content position-relative">
  <div class="container">
    <div class="row">

      <div class="col-lg-4 col-md-6">
        <div class="footer-info">
          <img src="assets/img/logokrys.svg"  alt="KRYS Solutions" height="100" style={{margin: "0 0 25px 0"}}/> 
          {/* assets/img/logokrys.svg */}
          <p>
            Odessa, Florida <br />
          
            <strong>Phone:</strong>+1 656-217-1792<br />
            <strong>Email:</strong> info@kryssolutions.com<br/>
          </p>
          <div class="social-links d-flex mt-3">
            <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-twitter"></i></a>
            <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-facebook"></i></a>
            <a href="#" class="d-flex align-items-center justify-content-center"><i class="bi bi-instagram"></i></a>
             <a href="https://www.linkedin.com/in/krys-solutions-0a328b302/" target="_blank" class="d-flex align-items-center justify-content-center"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
     {/* End footer info column */}

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Terms of service</a></li>
          <li><a href="#">Privacy policy</a></li>
        </ul>
      </div>
 {/* End footer links column */}

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><Link to="/artificialintelligence">Artificial Intelligence</Link></li>
          <li><Link to="/machinelearning">Machine Learning</Link></li>
          <li><Link to="/webAppdevelopment">WebApp Development</Link></li>
          <li><Link to="/infrastructure">Infrastructure <br />Management Services</Link></li>
          <li><Link to="/digitalmarketing">Digital Marketing</Link></li>
        </ul>
      </div>
   {/* End footer links column */}

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Industries</h4>
        <ul>
          <li><Link to="/retail">Retail</Link></li>
          <li><Link to="/healthcare">Health Care</Link></li>
          <li><Link to="/insurance">Insurance</Link></li>
          <li><Link to="/manufacturing">Manufacturing</Link></li>
          <li><Link to="/cmt">CMT</Link></li>
        </ul>
      </div>
      {/* End footer links column */}

      <div class="col-lg-2 col-md-3 footer-links">
        <h4>Industries</h4>
        <ul>
          <li><Link to="/banking">Banking</Link></li>
          <li><Link to="/lifesciences">Life Sciences</Link></li>
          <li><Link to="/automotive">Automotive</Link></li>
          <li><Link to="/consumerproducts">Consumer Products</Link></li>
          <li><Link to="/telecom">Telecom</Link></li>
        </ul>
      </div>
 {/* End footer links column */}

    </div>
  </div>
</div>

<div class="footer-legal text-center position-relative">
  <div class="container">
    <div class="copyright">
      &copy; Copyright <strong><span>KRYS Solutions</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
    
      Designed by <a href="#">KRYS Solutions</a>
    </div>
  </div>
</div>

</footer>
 </>
  )
}

export default Footer;
