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
  const [country, setCountry] = useState("ES");
  const [price, setPrice] = useState("Consultar");
  const [currency, setCurrency] = useState("");
  //const [navType, setNavType] = useState(width >= 915 ? <Nav /> : <NavSideBar />);

  const locUrl = 'https://get.geojs.io/v1/ip/country.json';
  const locationPrice = {
    prices: {
      MX: 500,
      US: 35,
      CA: 35,
      ZA: 500,
      ES: 35
    },
    currency: {
      MX: 'MX$ ',
      US: 'US$ ',
      CA: 'CA$ ',
      ZA: 'R',
      ES: '€'
    }
  }

  const handleToggleLegal = () => {
    //Display legal notice if clicked on
    //console.log("clicked", toggleLegal);
    setToggleLegal(toggleLegal ? false : true);
  }

  const getWindowSize = () => {
    // Get width and height of the window excluding scrollbars
    setWindowWidth(document.documentElement.clientWidth);
    setWindowHeight(document.documentElement.clientHeight);
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
          } else {
            //If location does not match provided locations, set country to Spain
            setCountry("ES");
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
    if ((windowHeight <= 475 && windowWidth <= 915) || (windowHeight <= 300 && windowWidth >= 915)) {
      setNavOrientation('compact');
      //console.log('compact H', windowHeight, 'W', windowWidth);
    } else if (windowHeight > 475 && windowWidth < 915) {
      setNavOrientation('vertical');
      //console.log('vertical H', windowHeight, 'W', windowWidth);
    } 
    else {
      setNavOrientation('horizontal');
      //console.log('horizontal H', windowHeight, 'W', windowWidth);
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
            <Prices price={price} currency={currency} />
            <Contact handleToggleLegal={handleToggleLegal} />
            <Footer />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
