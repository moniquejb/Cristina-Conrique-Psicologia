import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from '../components/Nav/Nav.js';
import NavSideBar from '../components/Nav/NavSideBar.js';
import Landing from '../components/Landing/Landing.js';
import Therapy from '../components/Therapy/Therapy.js';
import OnlineTherapy from '../components/OnlineTherapy/OnlineTherapy.js';
import TherapyBenefits from '../components/TherapyBenefits/TherapyBenefits.js';
import About from '../components/About/About.js';
import Contact from '../components/Contact/Contact.js';
import LegalWarning from '../components/LegalWarning/LegalWarning.js';
import Footer from '../components/Footer/Footer.js';
import FAQs from '../components/FAQs/FAQs.js';
import Prices from '../components/Prices/Prices.js';
import Resources from '../components/Resources/Resources.js';

function App() {
  const [toggleLegal, isToggleLegal] = useState(false); 

  const handleToggleLegal = () => {
    console.log("clicked", toggleLegal);
    isToggleLegal(toggleLegal ? false : true);
  }

  return (
    <Router>
      <>
        {/* <LegalWarning handleToggleLegal={handleToggleLegal} toggleLegal={toggleLegal} />
        <Nav />
        <Landing />
        <Therapy />
        <OnlineTherapy />
        <TherapyBenefits />
        <About />
        <Contact handleToggleLegal={handleToggleLegal} />
        <Footer /> */}

        <Switch>
          <Route path="/recursos">
            <NavSideBar />
            <Resources />
            <Footer />
          </Route>
          <Route path="/faqs">
            <Nav />
            <FAQs />
            <Footer />
          </Route>
          <Route path="/">
            <LegalWarning handleToggleLegal={handleToggleLegal} toggleLegal={toggleLegal} />
            <Nav />
            <Landing />
            <Therapy />
            <OnlineTherapy />
            <TherapyBenefits />
            <About />
            <Prices />
            <Contact handleToggleLegal={handleToggleLegal} />
            <Footer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
