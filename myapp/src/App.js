// App.js

import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import JailerLogin from './Components/JailerLogin';
import Navigationbar from './Components/Navigationbar';
import AboutUs from './Components/AboutUs';
import './App.css';
import PrisonerAdmin from './Components/PrisonerAdmin';
import Prisonerdelete from './Components/Prisonerdelete';
import JailorAdmin from './Components/JailorAdmin';
import Jailordelete from './Components/Jailordelete';
import UpdatePrisoner from './Components/UpdatePrisoner';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsOfService from './Components/TermsOfService';
import CookiePolicy from './Components/CookiePolicy';
import CookieBanner from './Components/CookieBanner';

import ViewSchedules from './Components/ViewSchedules';
import IssueRequest from './Components/IssueRequest';
import ContactUs from './Components/ContactUs';
import AddPoints from './Components/AddPoints';
import VisitationRequest from './Components/VisitationRequest';
import CounsellingRequest from './Components/CounsellingRequest';
import MedicationRequest from './Components/MedicationRequest';
import ApplyForJobs from'./Components/ApplyForJobs';
import DoctorConsultationForm from './Components/DoctorConsultation';
import RequestParole from './Components/RequestParole';
import Enrolling from'./Components/Enrolling';
import Footer from './Components/Footer';
import IssueCourse from './Components/IssueCourse';

const App = () => {
  //const [data,setData]=useState([])
  useEffect(()=>{
   },[])



  return (
    <div className="App">
      <div className='main-content'>
      <Navigationbar />
      <CookieBanner />
      
    <Routes>
    
          <Route path="/" element={<HomePage/>} />
          <Route path="/login"element={<Login/>} />  
          <Route exact path='/ApplyForJobs' element={<ApplyForJobs/>} />
          <Route exact path="/AboutUs" element={<AboutUs/>} />
          <Route exact path="/PrisonerAdmin"element={<PrisonerAdmin/>} />
          <Route exact path="/JailorAdmin"element={<JailorAdmin/>} />        
          <Route exact path="/Prisonerdelete"element={<Prisonerdelete />} />
          <Route exact path="/Jailordelete"element={<Jailordelete />} />
          <Route exact path="/UpdatePrisoner"element={<UpdatePrisoner />} />
          <Route exact path="/PrivacyPolicy"element={<PrivacyPolicy/>} />
          <Route exact path="/TermsOfService" element={<TermsOfService/>} />
          <Route exact path="/CookiePolicy"element={<CookiePolicy/>} />
          <Route exact path="/ViewSchedules"element={<ViewSchedules/>} />
          <Route exact path="/IssueRequest"element={<IssueRequest/>} />
          <Route exact path="/IssueCourse"element={<IssueCourse/>} />
          <Route exact path="/ContactUs" element={<ContactUs/>} />
          <Route exact path="/AddPoints" element={<AddPoints/>} />
          <Route exact path="/MedicationRequest" element={<MedicationRequest/>} />
          <Route exact path="/CounsellingRequest" element={<CounsellingRequest/>} />
          <Route exact path="/VisitationRequest" element={<VisitationRequest/>} />
          <Route exact path="/DoctorConsultationForm" element={<DoctorConsultationForm/>} />
          <Route exact path="/RequestParole" element={<RequestParole/>} />
          <Route exact path="/Enrolling" element={<Enrolling/>} />
          <Route exact path="/JailerLogin" element={<JailerLogin/>} />
         
          {/* Add more routes as needed */}
        
          
    </Routes></div>
    <Footer/>
    </div>
    
  );
};

export default App;
