import React from 'react';
import Webmain from './web';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import Aboutus from './aboutus';
import ArtificialIntelligence from './artificialintelligence';
import MachineLearning from './machinelearning';
import Staffaugmentation from './staffaugmentation';
import Aws from './aws';
import Cloudservices from './cloudservices';
import Gcp from './gcp';
import Cybersecurity from './cybersecurity';
import WebAppdevelopment from './webAppdevelopment';
import Strategy from './strategy';
import Roadmap from './roadmap';
import Mining from './mining';
import Governance from './governance';
import Infrastructure from './infrastructure';
import Quantum from './quantum';
import Crm from './crm';
import Application from './application';
import Digitalmarketing from './digitalmarketing';
import Retail from './retail';
import Healthcare from './healthcare';
import Insurance from './insurance';
import Manufacturing from './manufacturing';
import Cmt from './cmt';
import Banking from './banking';
import Lifesciences from './lifesciences';
import Automotive from './automotive';
import Consumerproducts from './consumerproducts';
import Telecom from './telecom';
import Utilities from './utilities';
import Contact from './contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <ScrollToTop />
   <Routes>
   <Route path='/' index element={<Webmain />} />
   <Route path='/header' index element={<Header />} />
   <Route path='/footer' index element={<Footer/>}/>
   <Route path='/aboutus' index element={<Aboutus/>}/>
   <Route path='/artificialintelligence' index element={<ArtificialIntelligence/>}/>
   <Route path='/machinelearning' index element={<MachineLearning/>}/>
   <Route path='/staffaugmentation' index element={<Staffaugmentation/>}/>
   <Route path='/aws' index element={<Aws/>}/>
   <Route path='/cloudservices' index element={<Cloudservices/>}/>
   <Route path='/gcp' index element={<Gcp/>}/>
   <Route path='/cybersecurity' index element={<Cybersecurity/>}/>
   <Route path='/webAppdevelopment' index element={<WebAppdevelopment/>}/>
   <Route path='/strategy' index element={<Strategy/>}/>
   <Route path='/roadmap' index element={<Roadmap/>}/>
   <Route path='/mining' index element={<Mining/>}/>
   <Route path='/governance' index element={<Governance/>}/>
   <Route path='/infrastructure' index element={<Infrastructure/>}/>
   <Route path='/quantum' index element={<Quantum/>}/>
   <Route path='/crm' index element={<Crm/>}/>
   <Route path='/application' index element={<Application/>}/>
   <Route path='/digitalmarketing' index element={<Digitalmarketing/>}/>
   <Route path='/retail' index element={<Retail/>}/>
   <Route path='/healthcare' index element={<Healthcare/>}/>
   <Route path='/insurance' index element={<Insurance/>}/>
   <Route path='/manufacturing' index element={<Manufacturing/>}/>
   <Route path='/cmt' index element={<Cmt/>}/>
   <Route path='/banking' index element={<Banking/>}/>
   <Route path='/lifesciences' index element={<Lifesciences/>}/>
   <Route path='/automotive' index element={<Automotive/>}/>
   <Route path='/consumerproducts' index element={<Consumerproducts/>}/>
   <Route path='/telecom' index element={<Telecom/>}/>
   <Route path='/utilities' index element={<Utilities/>}/>
   <Route path='/contact' index element={<Contact/>}/>
   </Routes>

   
   </BrowserRouter>


   </>
  )
}


export default App ;

