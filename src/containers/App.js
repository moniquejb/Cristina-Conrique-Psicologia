import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import loadable from '@loadable/component';

const Nav = loadable(() => import('../components/Nav/Nav.js'));
const Landing = loadable(() => import('../components/Landing/Landing.js'));
const Therapy = loadable(() => import('../components/Therapy/Therapy.js'));
const OnlineTherapy = loadable(() => import('../components/OnlineTherapy/OnlineTherapy.js'));
const TherapyBenefits = loadable(() => import('../components/TherapyBenefits/TherapyBenefits.js'));
const About = loadable(() => import('../components/About/About.js'));
const Contact = loadable(() => import('../components/Contact/Contact.js'));
const LegalWarning = loadable(() => import('../components/LegalWarning/LegalWarning.js'));
const Footer = loadable(() => import('../components/Footer/Footer.js'));
const FAQs = loadable(() => import('../components/FAQs/FAQs.js'));
const Prices = loadable(() => import('../components/Prices/Prices.js'));
const Resources = loadable(() => import('../components/Resources/Resources.js'));


// import Nav from '../components/Nav/Nav.js';
// import Landing from '../components/Landing/Landing.js';
// import Therapy from '../components/Therapy/Therapy.js';
// import OnlineTherapy from '../components/OnlineTherapy/OnlineTherapy.js';
// import TherapyBenefits from '../components/TherapyBenefits/TherapyBenefits.js';
// import About from '../components/About/About.js';
// import Contact from '../components/Contact/Contact.js';
// import LegalWarning from '../components/LegalWarning/LegalWarning.js';
// import Footer from '../components/Footer/Footer.js';
// import FAQs from '../components/FAQs/FAQs.js';
// import Prices from '../components/Prices/Prices.js';
// import Resources from '../components/Resources/Resources.js';

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function App() {
  const [toggleLegal, setToggleLegal] = useState(false);
  const [navOrientation, setNavOrientation] = useState('horizontal');
  const [windowWidth, setWindowWidth] = useState(width);
  const [windowHeight, setWindowHeight] = useState(height);
  const [country, setCountry] = useState("ES");
  const [originalCountry, setOriginalCountry] = useState("");
  const [price, setPrice] = useState("Consultar");
  const [currency, setCurrency] = useState("");

  const locUrl = 'https://get.geojs.io/v1/ip/country.json';
  const locationPrice = {
    prices: {
      MX: 500, //Mexico
      US: 35, //USA
      CA: 35, //Canada
      ZA: 500, //South Africa
      ES: 35, //Spain
      AR: 2500, //Argentina
      PE: 100, //Peru
      GB: 35, //Great Britain
      AU: 55, //Australia
      NZ: 55, //New Zealand
      VE: 10000, //Venezuela
      UY: 1000, //Uruguay
      GT: 200, //Guatemala
      CL: 20000, //Chile
      HN: 600, //Honduras
      CO: 90000 //Colombia

    },
    currency: {
      MX: 'MX$ ', //Mexico
      US: 'US$ ', //USA
      CA: 'CA$ ', //Canada
      ZA: 'R', //South Africa
      ES: '€', //Spain
      AR: 'ARS ', //Argentina
      PE: 'S/.', //Peru
      GB: '£', //Great Britain
      AU: 'A$ ', //Australia
      NZ: 'NZ$ ', //New Zealand
      VE: 'Bs.', //Venezuala
      UY: '$U ', // Uruguay
      GT: 'Q', //Guatamala
      CL: 'CLP$ ', //Chile
      HL: 'L', //Honduras
      CO: 'COL$ ' //Colombia
    }
  }

  const handleToggleLegal = ({ target }) => {
    //Toggle legal notice if user clicks on specified areas
    //Areas: Label, pop up background and 'x'
    let targetId = target.id;
    if (targetId === 'legal-warning-container'
      || targetId === 'legal-warning-x'
      || targetId === 'legal-warning-label'
      || targetId === 'legal-warning-label-strong') {
      setToggleLegal(toggleLegal ? false : true);

      //Disable scrolling on pop-up
      !toggleLegal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }
  }

  const getWindowSize = () => {
    // Get width and height of the window excluding scrollbars
    setWindowWidth(document.documentElement.clientWidth);
    setWindowHeight(document.documentElement.clientHeight);

    //Redetermine previously declared vh variable on resize/change in orientation
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    //Determine user's location and set country accordingly
    const getLocation = async (locUrl) => {
      await fetch(locUrl)
        .then(response => response.json())
        .then(data => {
          let checkCountry = Object.keys(locationPrice.prices);
          if (checkCountry.includes(data.country)) {
            //If country is part of provided locations, set country
            setCountry(data.country);
            setOriginalCountry(data.country);
          } else {
            //If location does not match provided locations, set country to Spain
            setCountry("ES");
            setOriginalCountry(data.country);
          }
        })
        .catch(e => {
          //If any errors, set country to Spain
          setCountry("ES");
          console.error(e.message)
        })
    }
    //Run function getLocation
    getLocation(locUrl);
  }, [])

  useEffect(() => {
    //Set currency and price according to country determined by getLocation function
    setPrice(locationPrice.prices[country]);
    setCurrency(locationPrice.currency[country]);
  }, [country])

  useEffect(() => {
    //Add event listener to moniter window hieght & width on every resize
    window.addEventListener("resize", getWindowSize);

    //Change navigation bar type according to current window heigth & width
    if (windowHeight <= 320 && windowWidth <= 240) {
      setNavOrientation('vertical');
    } else if ((windowHeight <= 475 && windowWidth <= 915) || (windowHeight <= 300 && windowWidth >= 915)) {
      setNavOrientation('compact');
    } else if (windowHeight > 475 && windowWidth < 915) {
      setNavOrientation('vertical');
    }
    else {
      setNavOrientation('horizontal');
    }

    return () => {
      //Remove event listener to avoid side effects
      window.removeEventListener("resize", getWindowSize);
    };
  },
    [windowWidth, navOrientation, windowHeight]);

  return (
    <Router>
      <>
        <Switch>
          <Route path="/recursos">
            <Nav navOrientation={navOrientation} />
            <Resources windowHeight={windowHeight} windowWidth={windowWidth} />
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
            <Landing windowHeight={windowHeight} windowWidth={windowWidth} />
            <Therapy />
            <OnlineTherapy />
            <TherapyBenefits />
            <About windowHeight={windowHeight} windowWidth={windowWidth} />
            <Prices price={price} currency={currency} country={country} />
            <Contact handleToggleLegal={handleToggleLegal} windowHeight={windowHeight} windowWidth={windowWidth} originalCountry={originalCountry} />
            <Footer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
