import React from 'react'

import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TbCertificate2} from 'react-icons/tb'

import './Navbar.scss'


const item = [
  {id:0, name:"accueil", imgUrl: <AiOutlineHome /> },
  {id:1, name:"mieux me connaître", imgUrl: <AiOutlineUser />},
  {id:2, name:"compétences", imgUrl: <TbCertificate2 />}
]

const itemList = item.map(list => {

  const name = list.name;
  const img = list.imgUrl;
    return(
      <li className="app__flex p-text" key={`link-${item}`}>
          <a className='app__nav-link'
            href={`#${name}`}
            key={name}>{img}
          </a>
      </li>
    )

})

const Navbar = ({ active }) => {
  return (
    <>
      <nav className='app__navbar'>
          <ul className='app__navbar-links'>
              {['accueil','mieux me connaître','compétences'].map((item, index) =>(
                <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                  <a href={`#${item}`}
                    key={item + index}
                    style={active === item ? { color: 'crimson' } : {}}>{item}</a>
                </li>
              ))}
          </ul>
      </nav>


      <div className='app__navbar-links-mobile'>
        <ul className='app__nav-list'>
                {itemList}
        </ul>
      </div>
    </>
  )
}

export default Navbar