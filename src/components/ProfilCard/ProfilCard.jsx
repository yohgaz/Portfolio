import React from 'react';

import {BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

import cover from '../../assets/cover.jpeg'
import photo from '../../assets/photo.jpeg'
import {images} from '../../assets'

import './ProfilCard.scss';

const ProfilCard = () => {
    return (
        <div className='app__profilecard'>
            <div className='app__profileimages'>
            <img src={cover} alt='Cover'/>
            <img src={photo} alt='pp'/>
            </div>
    
            <div className='app__profilename'>
                <span>Gazziéro Yohann</span>
                <p className='p-text'>Ouvert à toute opportunité</p>
            </div>
    
            <div className='app_socials'>
                <hr/>
                <div className='app__links'>
                    <a href='https://www.linkedin.com/in/yohanngazziero/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
                    <div className='app__vl'/>
                    <a href='https://github.com' target="_blank" rel="noreferrer"><FaGithub /></a>
                    <div className='app__vl'/>
                    <a href='https://twitter.com/yohgaz' target="_blank" rel="noreferrer"><BsTwitter /></a>
                </div>
                <hr />
                <div className='app__links-btn'>
                    <button className='app__cardbtn'><a href="mailto:contact@yohanngazziero.fr">Mail</a></button>
                    <button className='app__cardbtn'><a href={images.cv} target="_blank">CV</a></button>
                </div>
            </div>
        </div>
      )
}

export default ProfilCard
