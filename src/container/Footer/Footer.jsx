import React from 'react'


import {images} from '../../assets'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-contact'>
        <h2>Contact</h2>
        <a href="mailto:contact@yohanngazziero.fr">Mail</a>
        <a href={images.cv} target="_blank">CV</a>
      </div>
      <div className='app__footer-copyright'><h2>© Copyright</h2> 
      Yohann Gazziéro<br />
      -2022-
      </div>
      <div className='app__footer-socials'>
      <h2>Réseaux sociaux:</h2>
      <a href='https://www.linkedin.com/in/yohanngazziero/' target="_blank" rel="noreferrer">Linkedin</a>
      <div className='app__vl'/>
      <a href='https://github.com/yohgaz' target="_blank" rel="noreferrer">github</a>
      <div className='app__vl'/>
      <a href='https://twitter.com/yohgaz' target="_blank" rel="noreferrer">twitter</a>
      </div>
      
    </div>
  )
}

export default Footer
