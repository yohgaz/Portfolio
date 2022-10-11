import React from 'react'

import {About, Footer, Header, Skills} from'./container';
import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className='app'>

      <div className='blur' style={{ top:'30%', right:'0', background:'#f0d4a6' }} ></div>
      <div className='blur' style={{ top:'5%', left:'0', background:'#a6ddf0' }} ></div>
      <div className='blur' style={{ bottom:'5%', left:'30%', background:'#f0a6a6' }} ></div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App
