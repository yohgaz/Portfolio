import React from 'react'
import {motion} from 'framer-motion'

import {AppWrap} from '../../Wrapper'
import { images } from '../../assets'
import './Skills.scss'


const competence = [
  {id:0, name:"HTML & CSS", percent:"80%", imgUrl: images.html5 },
  {id:1, name:"SCSS", percent:"70%", imgUrl: images.sass},
  {id:2, name:"Java Script", percent:"50%", imgUrl: images.js },
  {id:3, name:"ReactJS", percent:"60%", imgUrl: images.react },
  {id:4, name:"Angular", percent:"50%", imgUrl: images.angular },
  {id:5, name:"VS Code", percent:"75%", imgUrl: images.vscode },
  {id:6, name:"Photoshop", percent:"70%", imgUrl: images.photoshop },
  {id:0, name:"Anglais", percent:"50%" }
]

const timeline = [
  {id: 0, date: "2008", descritopn: "Stage de 2 mois au Conseil général de l'Aisne ( département de la voierie ) Ma mission était de définir et créer les pages concernant cette division sur le site intranet du conseil général"},
  {id: 0, date: "2017", descritopn: "Obtention de mon diplôme Développeur Informatique Industrielle et Embarquée à l'AFPA Saint-Etienne du Rouvray à Rouen."},
  {id: 0, date: "2008", descritopn: "Obtention de mon certificat Dyma pour le Framework  Angular via uen formation en autodidact"},
  {id: 0, date: "2022", descritopn: "Obtention de mon certificat Udemy pour le Framework  ReactJS via une formation en autodidact"}
]

const skillList = competence.map(comp => {
  const percentWidth = comp.percent;
  const nom = comp.name;
  return(
      <ul className='app__progressbar'>
          <li>
              <div className='app__skills-progressbar'>
              <motion.div
                initial={{width:0}}
                animate={{width:`${percentWidth}`}}
                transition={{ duration: 1, delayChildren: 0}}
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                key={ nom }
                className='app__skills-progressbar-percent'>
                <div className='app__progressbar-name'>{nom}</div>
              </motion.div>
              
              </div>
          </li>
      </ul>
  )
})

const timelineList = timeline.map(time => {
  const date = time.date;
  const description = time.descritopn;
  return(
    <li>
      <div>
        <time>{date}</time> {description}
      </div>
    </li>
  )
})

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Compétences et expériences</h2>

      <div className='app__skills-container'>
        {skillList}
        <div className='app__timeline'>
        <ol>
          {timelineList}
        </ol>
        </div>
      </div>

    </>
  )
}

export default AppWrap(
  Skills, 
  'compétences',
  )
