// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './App.css'; // Assuming you have the styles in App.css

// function Header() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isNavActive, setIsNavActive] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const toggleMobileNav = () => {
//     setIsNavActive(!isNavActive);
//   };

//   const closeMobileNav = () => {
//     setIsNavActive(false);
//   };

//   useEffect(() => {
//     const body = document.body;
//     if (isNavActive) {
//       body.classList.add('mobile-nav-active');
//     } else {
//       body.classList.remove('mobile-nav-active');
//     }
//   }, [isNavActive]);

//   return (
//     <>
//       <header
//         id="header"
//         className="header d-flex align-items-center"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="container-fluid d-flex align-items-center justify-content-between">
//           <Link to="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
//             <img
//               id="img_logo"
//               src={isHovered ? './assets/img/logo2.svg' : 'assets/img/logokrys.svg'}
//               alt="Logo"
//               style={{ height: '70px' }}
//             />
//           </Link>
//           <i
//             className={`mobile-nav-toggle ${isNavActive ? 'd-none' : 'mobile-nav-show'} bi bi-list`}
//             onClick={toggleMobileNav}
//           ></i>
//           <i
//             className={`mobile-nav-toggle ${isNavActive ? 'mobile-nav-hide' : 'd-none'} bi bi-x`}
//             onClick={toggleMobileNav}
//           ></i>
//           <nav id="navbar" className={`navbar ${isNavActive ? 'mobile-nav-active' : ''}`}>
//             <ul>
//               <li>
//                 <Link to="/" className="active nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/aboutus" className="nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
//                   About
//                 </Link>
//               </li>
//               <li className="dropdown">
//                 <a href="#" className="nav_link" style={{ color: isHovered ? 'black' : '' }}>
//                   <span>Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
//                 </a>
//                 <ul>
//                   <li>
//                     <Link to="/artificialintelligence" onClick={closeMobileNav}>Artificial Intelligence</Link>
//                   </li>
//                   <li>
//                     <Link to="/machinelearning" onClick={closeMobileNav}>Machine Learning</Link>
//                   </li>
//                   <li>
//                     <Link to="/staffaugmentation" onClick={closeMobileNav}>Staff Augmentation</Link>
//                   </li>
//                   <li className="dropdown">
//                     <a href="#">
//                       <span>Cloud Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
//                     </a>
//                     <ul>
//                       <li>
//                         <Link to="/aws" onClick={closeMobileNav}>AWS</Link>
//                       </li>
//                       <li>
//                         <Link to="/cloudservices" onClick={closeMobileNav}>Azure</Link>
//                       </li>
//                       <li>
//                         <Link to="/gcp" onClick={closeMobileNav}>GCP</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/cybersecurity" onClick={closeMobileNav}>Cyber Security & <br />Risk Management</Link>
//                   </li>
//                   <li>
//                     <Link to="/webAppdevelopment" onClick={closeMobileNav}> WebApp Development</Link>
//                   </li>
//                   <li className="dropdown">
//                     <a href="#">
//                       <span>Data Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
//                     </a>
//                     <ul>
//                       <li>
//                         <Link to="/strategy" onClick={closeMobileNav}>Strategy</Link>
//                       </li>
//                       <li>
//                         <Link to="/roadmap" onClick={closeMobileNav}>Roadmap</Link>
//                       </li>
//                       <li>
//                         <Link to="/mining" onClick={closeMobileNav}>Mining</Link>
//                       </li>
//                       <li>
//                         <Link to="/governance" onClick={closeMobileNav}>Governance</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <Link to="/infrastructure" onClick={closeMobileNav}>Infrastructure <br />Management Services</Link>
//                   </li>
//                   <li>
//                     <Link to="/quantum" onClick={closeMobileNav}>Quantum Computing</Link>
//                   </li>
//                   <li>
//                     <Link to="/crm" onClick={closeMobileNav}>CRM</Link>
//                   </li>
//                   <li>
//                     <Link to="/application" onClick={closeMobileNav}> Application <br />Management Services </Link>
//                   </li>
//                   <li>
//                     <Link to="/digitalmarketing" onClick={closeMobileNav}>Digital Marketing</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="dropdown">
//                 <a href="#" className="nav_link" style={{ color: isHovered ? 'black' : '' }}>
//                   <span>Industries</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
//                 </a>
//                 <ul>
//                   <li>
//                     <Link to="/retail" onClick={closeMobileNav}>Retail</Link>
//                   </li>
//                   <li>
//                     <Link to="/healthcare" onClick={closeMobileNav}>Health Care</Link>
//                   </li>
//                   <li>
//                     <Link to="/insurance" onClick={closeMobileNav}>Insurance</Link>
//                   </li>
//                   <li>
//                     <Link to="/manufacturing" onClick={closeMobileNav}>Manufacturing</Link>
//                   </li>
//                   <li>
//                     <Link to="/cmt" onClick={closeMobileNav}>CMT</Link>
//                   </li>
//                   <li>
//                     <Link to="/banking" onClick={closeMobileNav}>Banking</Link>
//                   </li>
//                   <li>
//                     <Link to="/lifesciences" onClick={closeMobileNav}>LifeSciences</Link>
//                   </li>
//                   <li>
//                     <Link to="/automotive" onClick={closeMobileNav}>Automotive</Link>
//                   </li>
//                   <li>
//                     <Link to="/consumerproducts" onClick={closeMobileNav}>Consumer Products</Link>
//                   </li>
//                   <li>
//                     <Link to="/telecom" onClick={closeMobileNav}>Telecom</Link>
//                   </li>
//                   <li>
//                     <Link to="/utilities" onClick={closeMobileNav}>Utilities</Link>
//                   </li>
//                 </ul>
//               </li>
//               <li>
//                 <Link to="/contact" className="nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;






import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Assuming you have the styles in App.css

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDataServicesOpen, setIsDataServicesOpen] = useState(false);
  const [isCloudServicesOpen, setIsCloudServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMobileNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeMobileNav = () => {
    setIsNavActive(false);
  };

  useEffect(() => {
    const body = document.body;
    if (isNavActive) {
      body.classList.add('mobile-nav-active');
    } else {
      body.classList.remove('mobile-nav-active');
    }
  }, [isNavActive]);



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCloudServicesDropdown = () => {
    setIsCloudServicesOpen(!isCloudServicesOpen);
  };

  const toggleDataServicesDropdown = () => {
    setIsDataServicesOpen(!isDataServicesOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesOpen(!isIndustriesOpen);
  };
 

 
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
            <img
              id="img_logo"
              src={isHovered ? './assets/img/logo2.svg' : 'assets/img/logokrys.svg'}
              alt="Logo"
              style={{ height: '70px' }}
            />
          </Link>
          <i
            className={`mobile-nav-toggle ${isNavActive ? 'd-none' : 'mobile-nav-show'} bi bi-list`}
            onClick={toggleMobileNav}
          ></i>
          <i
            className={`mobile-nav-toggle ${isNavActive ? 'mobile-nav-hide' : 'd-none'} bi bi-x`}
            onClick={toggleMobileNav}
          ></i>
          <nav id="navbar" className={`navbar ${isNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li>
                <Link to="/" className="active nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
                  About
                </Link>
              </li>





              <li className={`dropdown ${isOpen ? 'open' : ''}`}>
      <a href="#" className="nav_link" onClick={toggleDropdown} style={{ color: isHovered ? 'black' : '' }}>
        <span>Services</span> <i className="bi bi-chevron-down dropdown-indicator" ></i>
      </a>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} >
        <li>
          <Link to="/artificialintelligence" onClick={closeMobileNav}>Artificial Intelligence</Link>
        </li>
        <li>
          <Link to="/machinelearning" onClick={closeMobileNav}>Machine Learning</Link>
        </li>
        <li>
          <Link to="/staffaugmentation" onClick={closeMobileNav}>Staff Augmentation</Link>
        </li>





        <li className="dropdown">
          <a href="#" onClick={toggleCloudServicesDropdown}>
            <span>Cloud Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul className={`dropdown-menu ${isCloudServicesOpen ? 'show' : ''}`} >
            <li>
              <Link to="/aws" onClick={closeMobileNav}>AWS</Link>
            </li>
            <li>
              <Link to="/cloudservices" onClick={closeMobileNav}>Azure</Link>
            </li>
            <li>
              <Link to="/gcp" onClick={closeMobileNav}>GCP</Link>
            </li>
          </ul>
        </li>





                  <li>
                    <Link to="/cybersecurity" onClick={closeMobileNav}>Cyber Security & <br />Risk Management</Link>
                  </li>
                  <li>
                    <Link to="/webAppdevelopment" onClick={closeMobileNav}> WebApp Development</Link>
                  </li>





                  <li className="dropdown">
          <a href="#" onClick={toggleDataServicesDropdown}>
            <span>Data Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul className={`dropdown-menu ${isDataServicesOpen ? 'show' : ''}`} >
            <li>
              <Link to="/strategy" onClick={closeMobileNav}>Strategy</Link>
            </li>
            <li>
              <Link to="/roadmap" onClick={closeMobileNav}>Roadmap</Link>
            </li>
            <li>
              <Link to="/mining" onClick={closeMobileNav}>Mining</Link>
            </li>
            <li>
              <Link to="/governance" onClick={closeMobileNav}>Governance</Link>
            </li>
          </ul>
        </li>



                  <li>
                    <Link to="/infrastructure" onClick={closeMobileNav}>Infrastructure <br />Management Services</Link>
                  </li>
                  <li>
                    <Link to="/quantum" onClick={closeMobileNav}>Quantum Computing</Link>
                  </li>
                  <li>
                    <Link to="/crm" onClick={closeMobileNav}>CRM</Link>
                  </li>
                  <li>
                    <Link to="/application" onClick={closeMobileNav}> Application <br />Management Services </Link>
                  </li>
                  <li>
                    <Link to="/digitalmarketing" onClick={closeMobileNav}>Digital Marketing</Link>
                  </li>
                </ul>
              </li>





              <li className="dropdown">
          <a href="#" className="nav_link" onClick={toggleIndustriesDropdown} style={{ color: isHovered ? 'black' : '' }}>
            <span>Industries</span> <i className="bi bi-chevron-down dropdown-indicator"></i>
          </a>
          <ul className={`dropdown-menu ${isIndustriesOpen ? 'show' : ''}`} >
            <li>
              <Link to="/retail" onClick={closeMobileNav}>Retail</Link>
            </li>
            <li>
              <Link to="/healthcare" onClick={closeMobileNav}>Health Care</Link>
            </li>
            <li>
              <Link to="/insurance" onClick={closeMobileNav}>Insurance</Link>
            </li>
            <li>
              <Link to="/manufacturing" onClick={closeMobileNav}>Manufacturing</Link>
            </li>
            <li>
              <Link to="/cmt" onClick={closeMobileNav}>CMT</Link>
            </li>
            <li>
              <Link to="/banking" onClick={closeMobileNav}>Banking</Link>
            </li>
            <li>
              <Link to="/lifesciences" onClick={closeMobileNav}>LifeSciences</Link>
            </li>
            <li>
              <Link to="/automotive" onClick={closeMobileNav}>Automotive</Link>
            </li>
            <li>
              <Link to="/consumerproducts" onClick={closeMobileNav}>Consumer Products</Link>
            </li>
            <li>
              <Link to="/telecom" onClick={closeMobileNav}>Telecom</Link>
            </li>
            <li>
              <Link to="/utilities" onClick={closeMobileNav}>Utilities</Link>
            </li>
          </ul>
        </li>





              <li>
                <Link to="/contact" className="nav_link" style={{ color: isHovered ? 'black' : '' }} onClick={closeMobileNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;