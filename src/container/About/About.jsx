import React from 'react'
import {motion} from 'framer-motion'

import {AppWrap} from '../../Wrapper'
import frontend from '../../assets/frontend.jpeg'
import design from '../../assets/design.jpeg'
import veille from '../../assets/veille.jpeg'
import './About.scss'
import '../../assets/index'


const whoami = [
  {title:"Frontend", text:"J'aime créer des sites ou applications web esthétiques, fonvtionnels et responsives.", imgUrl: frontend },
  {title:"UI/UX", text:"Passionné par l’UX et l'UI, un bon design en plus d’être fonctionnel doit être adapté pour toutes personnes, même celles avec un handicap. ", imgUrl:design },
  {title:"Veille", text:"Le web de demain se construit aujourd’hui. J’aime me tenir informé des nouvelles technologies, d'évolutions de ceux utilisés actuellement ou encore de nouveaux Framework afin de me préparer au mieux pour les projets futurs.", imgUrl:veille }
]
const list = whoami.map(comp => {
  const title = comp.title;
  const developpement = comp.text;
  const image = comp.imgUrl;
  return(
    <motion.div
      whileInView={{ opacity: 1}}
      whileHover={{ scale: 1.1}}
      transition= {{duration: 0.5, type: 'tween'}}
      className="app__profile-item"
      key={ title }
      >
        <img src={image} alt={title} />
        <h2 className='bold-text'>{title}</h2>
        <p className='p-text'>{developpement}</p>
    </motion.div>
  )
})

const About = () => {
  return (
    <>
      <h2 className='head-text' style={{ marginTop: 30 }}>"Donner vie <span>à des idées </span><br />
        en partant <span>de rien</span>"</h2>

      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 1 }}
        className='app__header-info'  style={{ marginTop: 50 }}>
          <div className='app__about-card'>
            <h2 style={{ marginTop: 10 }}>Qui suis-je ?</h2>
            <p className='p-text' style={{ marginTop: 10 }}>Passionné du web depuis mon adolescence, j’ai décidé d’apprendre dans un premier 
              temps en autodidacte le HTML et le CSS puis ensuite de partir vers une formation à 
              l’AFPA pour améliorer mes compétences et apprendre de nouvelles choses. <br/>
              Depuis l’obtention de ce diplôme j’ai décidé d’élargir mes compétences via 
              des formations certifiantes en Java Script, Angular ( version 4 ) ainsi que ReactJS
            </p>
          </div>
      </motion.div>

      <div className='app__profiles'>
        {list}
      </div>
    </>
  )
}

export default AppWrap(About, 
  'mieux me connaître'
  )
