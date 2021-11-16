import React, { useState } from 'react';
//import { useLocation } from 'react-router-dom';
import { DepressionContent, AnxietyContent, SocialContent, LGBTContent, VideosContent } from '../../utilities/resourceContent.js';
import './Resources.css';

// ************************
//TODO- figure out how to change class of only selected resourse using React instead of directly changing DOM
// ************************

const Resources = ({ windowHeight, windowWidth }) => {
  const [toggleContentDepression, setToggleContentDepression] = useState(true);
  const [toggleContentAnxiety, setToggleContentAnxiety] = useState(true);
  const [toggleContentSocial, setToggleContentSocial] = useState(true);
  const [toggleContentLGBT, setToggleContentLGBT] = useState(true);
  const [toggleContentVideos, setToggleContentVideos] = useState(true);
  const [toggleContainerHeight, setToggleContainerHeight] = useState('resource-height-closed');
  const [resourseClassName, setResourceClassName] = useState('');
  
  //const location = useLocation();
  //const handleResourceLocation = () => {
  //Close side/compact navigation bar if a nav link linked to landing page is clicked
  //console.log(location.pathname);
  // if (location.pathname === '/recursos') {
  //   console.log('path', true);
  // }
  //}

  const handleToggleResource = ({ target }) => {
    let resourceName = target.className;
    setResourceClassName(prevClass => {
      //Check if new target is the same as previous target and if that resourse is currently open
      //If so, hide and close resource list
      if (prevClass === resourceName && toggleContainerHeight === 'resource-height-open') {
        hideResources();
        setToggleContainerHeight('resource-height-closed');
      } else {
        //If new target is different to previous target or is first target click, then
        //close any previous resource and show correctly targeted resource list
        setToggleContainerHeight('resource-height-open');
        switch (resourceName) {
          case 'depression-click':
            hideResources();
            setToggleContentDepression(false);
            document.getElementById('resource-box-1').classList.add('chosen-box');
            break;
          case 'anxiety-click':
            hideResources();
            setToggleContentAnxiety(false);
            document.getElementById('resource-box-2').classList.add('chosen-box');
            break;
          case 'social-click':
            hideResources();
            setToggleContentSocial(false);
            document.getElementById('resource-box-3').classList.add('chosen-box');
            break;
          case 'lgbt-click':
            hideResources();
            setToggleContentLGBT(false);
            document.getElementById('resource-box-4').classList.add('chosen-box');
            break;
          case 'videos-click':
            hideResources();
            setToggleContentVideos(false);
            document.getElementById('resource-box-5').classList.add('chosen-box');
            break;
          default:
            console.log('error');
            break;
        }
      }
      setResourceClassName(target.className);
    })
  }

  const hideResources = () => {
    //Hide all resource list components
    setToggleContentDepression(true);
    setToggleContentAnxiety(true);
    setToggleContentSocial(true);
    setToggleContentLGBT(true);
    setToggleContentVideos(true);

    //Remove class that displays list
    for (let i = 1; i <= 5; i++) {
      document.getElementById(`resource-box-${i}`).classList.remove('chosen-box');
    }
  }

  return (
    <>
      <div className='nav-placeholder' id='top'></div>
      <div className='resources-container'>
        <h1>Recursos</h1>
        <div className='resource-flex-container'>
          <div className='resource-boxes-container' id='resource-boxes-container'>
            <div className='resource-box' id='resource-box-1'>
              <a href='/recursos#depresion'>
                <div className='resource-box-content' onClick={handleToggleResource}>
                  <img className='depression-click' alt='Imagen de Depresión' src='images/depression.jpg'></img>
                  <h3 id='depresion' className='depression-click'>Depresión</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <DepressionContent toggleContentDepression={toggleContentDepression} />}
            <div className='resource-box' id='resource-box-2' onClick={handleToggleResource}>
              <a href='/recursos#ansiedad'>
                <div className='resource-box-content'>
                  <img className='anxiety-click' alt='Imagen de Ansiedad' src='images/anxiety.jpg'></img>
                  <h3 id='ansiedad' className='anxiety-click'>Ansiedad</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <AnxietyContent toggleContentAnxiety={toggleContentAnxiety} />}
            <div className='resource-box' id='resource-box-3' onClick={handleToggleResource}>
              <a href='/recursos#habilidades-sociales'>
                <div className='resource-box-content'>
                  <img className='social-click' alt='Imagen de Habilidades Sociales' src='images/social.jpg'></img>
                  <h3 id='habilidades-sociales' className='social-click'>Habilidades Sociales</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <SocialContent toggleContentSocial={toggleContentSocial} />}
            {/* <div className='breakRes'></div> */}
            <div className='resource-box' id='resource-box-4' onClick={handleToggleResource}>
              <a href='/recursos#material-lgbt'>
                <div className='resource-box-content'>
                  <img className='lgbt-click' alt='Imagen de Material LGBT' src='images/lgbt.jpg'></img>
                  <h3 id='material-lgbt' className='lgbt-click'>Material LGBT</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <LGBTContent toggleContentLGBT={toggleContentLGBT} />}
            <div className='resource-box' id='resource-box-5' onClick={handleToggleResource}>
              <a href='/recursos#videos'>
                <div className='resource-box-content'>
                  <img className='videos-click' alt='Imagen de Videos' src='images/videos.jpg'></img>
                  <h3 id='videos' className='videos-click'>Videos</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600) ||
              ((windowHeight < windowWidth) && windowWidth <= 480)) && <VideosContent toggleContentVideos={toggleContentVideos} />}
          </div>
          {(((windowHeight < windowWidth) && windowWidth > 480) || windowWidth >= 600) &&
            <>
              <DepressionContent toggleContentDepression={toggleContentDepression} />
              <AnxietyContent toggleContentAnxiety={toggleContentAnxiety} />
              <SocialContent toggleContentSocial={toggleContentSocial} />
              <LGBTContent toggleContentLGBT={toggleContentLGBT} />
              <VideosContent toggleContentVideos={toggleContentVideos} />
            </>}
        </div>
      </div>
      {/* Only display "Return to top" icon if a resource list is currently open */}
      <div hidden={toggleContainerHeight === 'resource-height-open' ? false : true} className='to-top'>
        <a href='/recursos#top'>↥ Volver arriba ↥</a>
      </div>
    </>
  )
}

export default Resources;