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
  const [imageClass, setImageClass] = useState('images-loading');
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Array of topic images to preload
  let resourceImages = [
    "images/depression.jpg",
    "images/anxiety.jpg",
    "images/social.jpg",
    "images/lgbt.jpg",
    "images/videos.jpg"
  ];

  // Funtion to preload images
  const preload = async (images) => {
    let load = resourceImages.map(async a => {
      let img = new Image();
      img.src = a;
      return await new Promise(res => {
        img.onload = () => res(img);
      })
    })

    // Change from loader svg to image once all loaded
    await Promise.all(load);
    setIsImageLoaded(true);
    setImageClass('images-loaded')
  }

  preload(resourceImages);

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
            <div className={`${imageClass} resource-box`} id='resource-box-1'>
              <a href={!toggleContentDepression ? `/recursos#depresion` : 'javascript:void(0);'}>
                <div className='resource-box-content' onClick={handleToggleResource}>
                  <img preload className='depression-click' alt='Imagen de Depresión' src={!isImageLoaded ? 'images/loading-resource.svg' : resourceImages[0]}></img>
                  <h3 id='depresion' className='depression-click'>{!isImageLoaded ? '' : 'Depresión'}</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <DepressionContent toggleContentDepression={toggleContentDepression} />}
            <div className={`${imageClass} resource-box`} id='resource-box-2' onClick={handleToggleResource}>
              <a href={!toggleContentAnxiety ? `/recursos#ansiedad` : 'javascript:void(0);'}>
                <div className={'resource-box-content'}>
                  <img preload className='anxiety-click' alt='Imagen de Ansiedad' src={!isImageLoaded ? 'images/loading-resource.svg' : resourceImages[1]}></img>
                  <h3 id='ansiedad' className='anxiety-click'>{!isImageLoaded ? '' : 'Ansiedad'}</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <AnxietyContent toggleContentAnxiety={toggleContentAnxiety} />}
            <div className={`${imageClass} resource-box`} id='resource-box-3' onClick={handleToggleResource}>
              <a href={!toggleContentSocial ? `/recursos#habilidades-sociales` : 'javascript:void(0);'}>
                <div className='resource-box-content'>
                  <img preload className='social-click' alt='Imagen de Habilidades Sociales' src={!isImageLoaded ? 'images/loading-resource.svg' : resourceImages[2]}></img>
                  <h3 id='habilidades-sociales' className='social-click'>{!isImageLoaded ? '' : 'Habilidades Sociales'}</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <SocialContent toggleContentSocial={toggleContentSocial} />}
            {/* <div className='breakRes'></div> */}
            <div className={`${imageClass} resource-box`} id='resource-box-4' onClick={handleToggleResource}>
              <a href={!toggleContentLGBT ? `/recursos#material-lgbt` : 'javascript:void(0);'}>
                <div className='resource-box-content'>
                  <img preload className='lgbt-click' alt='Imagen de Material LGBTIQ+' src={!isImageLoaded ? 'images/loading-resource.svg' : resourceImages[3]}></img>
                  <h3 id='material-lgbt' className='lgbt-click'>{!isImageLoaded ? '' : 'Material LGBTIQ+'}</h3>
                </div>
              </a>
            </div>
            {(((windowHeight > windowWidth) && windowWidth < 600)
              || ((windowHeight < windowWidth) && windowWidth <= 480))
              && <LGBTContent toggleContentLGBT={toggleContentLGBT} />}
            <div className={`${imageClass} resource-box`} id='resource-box-5' onClick={handleToggleResource}>
              <a href={!toggleContentVideos ? `/recursos#videos` : 'javascript:void(0);'}>
                <div className='resource-box-content'>
                  <img preload className='videos-click' alt='Imagen de Videos' src={!isImageLoaded ? 'images/loading-resource.svg' : resourceImages[4]}></img>
                  <h3 id='videos' className='videos-click'>{!isImageLoaded ? '' : 'Videos'}</h3>
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