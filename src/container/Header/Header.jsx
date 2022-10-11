import React from 'react'

import {AppWrap} from '../../Wrapper'
import ProfilCard from '../../components/ProfilCard/ProfilCard'
import {images} from '../../assets'
import './Header.scss'


const Header = () => {
  return (
    <div  className='app__header app__flex'>
      <div className="app__header-info">
        <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p>Bonjour, je m'appelle</p>
                <h1>Yohann</h1>
              </div>
            </div>
        </div>


      </div>

      <div className="app__header-circles">
      <h2 className='head-text'>Developer Web Junior passioné d'UX/UI</h2>
        {[images.react, images.angular, images.html5, images.css3, images.sass, images.js, images.photoshop, images.vscode].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </div>
      <ProfilCard />
    </div>
  )
}

export default AppWrap(Header, 'accueil');
