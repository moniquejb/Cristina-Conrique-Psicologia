import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from '../components/Nav/Nav.js';
import Landing from '../components/Landing/Landing.js';
import Therapy from '../components/Therapy/Therapy.js';
import About from '../components/About/About.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js';
import Prices from '../components/Prices/Prices.js';

const OnlineTherapy = lazy(() => import('../components/OnlineTherapy/OnlineTherapy.js'));
const TherapyBenefits = lazy(() => import('../components/TherapyBenefits/TherapyBenefits.js'));
const FAQs = lazy(() => import('../components/FAQs/FAQs.js'));
const Resources = lazy(() => import('../components/Resources/Resources.js'));
const LegalWarning = lazy(() => import('../components/LegalWarning/LegalWarning.js'));
const renderLoader = () => <img height="30px" width="auto" src='images/loading-resource.svg'></img>;

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
        <Nav navOrientation={navOrientation} />
        <Switch>
          <Route path="/recursos">
            <Suspense fallback={renderLoader}>
              <Resources windowHeight={windowHeight} windowWidth={windowWidth} />
            </Suspense>
          </Route>
          <Route path="/faqs">
            <Suspense fallback={renderLoader}>
              <FAQs />
            </Suspense>
          </Route>
          <Route path="/">       
              <Landing windowHeight={windowHeight} windowWidth={windowWidth} />
              <Therapy />
              <Suspense fallback={renderLoader}>
                <LegalWarning handleToggleLegal={handleToggleLegal} toggleLegal={toggleLegal} />
                <OnlineTherapy />
                <TherapyBenefits />
              </Suspense>
              <About windowHeight={windowHeight} windowWidth={windowWidth} />
              <Prices price={price} currency={currency} country={country} />
              <Contact handleToggleLegal={handleToggleLegal} windowHeight={windowHeight} windowWidth={windowWidth} originalCountry={originalCountry} />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
