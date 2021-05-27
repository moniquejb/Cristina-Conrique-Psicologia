import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Nav from '../components/Nav/Nav.js';
//import NavSideBar from '../components/Nav/NavSideBar.js';
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
let height = document.documentElement.clientHeight;

function App() {
  const [toggleLegal, setToggleLegal] = useState(false);
  const [navOrientation, setNavOrientation] = useState('horizontal');
  const [windowWidth, setWindowWidth] = useState(width);
  const [windowHeight, setWindowHeight] = useState(height);
  //const [navType, setNavType] = useState(width >= 915 ? <Nav /> : <NavSideBar />);

  const handleToggleLegal = () => {
    console.log("clicked", toggleLegal);
    setToggleLegal(toggleLegal ? false : true);
  }

  function getWindowSize() {
    // Get width and height of the window excluding scrollbars
    setWindowWidth(document.documentElement.clientWidth);
    setWindowHeight(document.documentElement.clientHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", getWindowSize);

    if ((windowHeight <= 475 && windowWidth < 915) || (windowHeight <= 300 && windowWidth > 915)) {
      setNavOrientation('compact');
    } else if (windowHeight > 475 && windowWidth < 915) {
      setNavOrientation('vertical');
    } else {
      setNavOrientation('horizontal');
    } 

    // if (navOrientation === 'horizontal' && windowWidth < 915) {
    //   setNavOrientation('vertical');
    //   //setNavType(<NavSideBar />);
    // }

    // if (navOrientation === 'vertical' && windowWidth >= 915) {
    //   setNavOrientation('horizontal');
    //   //setNavType(<Nav />);
    // }

    return () => {
      window.removeEventListener("resize", getWindowSize);
    };
  },
    [windowWidth, navOrientation, windowHeight]);

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
            <Nav navOrientation={navOrientation} />
            <Resources />
            <Footer />
          </Route>
          <Route path="/faqs">
            <Nav navOrientation={navOrientation} />
            <FAQs />
            <Footer />
          </Route>
          <Route path="/">
            <LegalWarning handleToggleLegal={handleToggleLegal} toggleLegal={toggleLegal} />
            <Nav navOrientation={navOrientation} />
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
