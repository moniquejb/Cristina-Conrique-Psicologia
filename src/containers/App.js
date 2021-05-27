import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from '../components/Nav/Nav.js';
import NavSideBar from '../components/Nav/NavSideBar.js';
//import NavCompactBar from '../components/Nav/NavCompactBar.js';
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

let width = document.documentElement.clientWidth;
//let height = document.documentElement.clientHeight;

function App() {
  const [toggleLegal, isToggleLegal] = useState(false);
  const [navOrientation, isNavOrientation] = useState('horizontal');
  const [windowWidth, isWindowWidth] = useState(width);
  //const [windowHeight, isWindowHeight] = useState(height);
  const [navType, isNavType] = useState(width >= 915 ? <Nav /> : <NavSideBar />);

  const handleToggleLegal = () => {
    console.log("clicked", toggleLegal);
    isToggleLegal(toggleLegal ? false : true);
  }

  function getWindowSize() {
    // Get width and height of the window excluding scrollbars
    isWindowWidth(document.documentElement.clientWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);

    if (navOrientation === 'horizontal' && windowWidth < 915) {
      isNavOrientation('vertical');
      isNavType(<NavSideBar />);
    }
    
    if (navOrientation === 'vertical' && windowWidth >= 915) {
      isNavOrientation('horizontal');
      isNavType(<Nav />);
    }

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  },
    [windowWidth, navOrientation, navType]);

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
            {navType}
            <Resources />
            <Footer />
          </Route>
          <Route path="/faqs">
            {navType}
            <FAQs />
            <Footer />
          </Route>
          <Route path="/">
            <LegalWarning handleToggleLegal={handleToggleLegal} toggleLegal={toggleLegal} />
            {navType}
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
