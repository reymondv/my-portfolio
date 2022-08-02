import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import tsparticlesconfig from '../data/particlesjs-config.json';

import React from 'react'

const particles = () => {
    const particlesInit = async(main) => {
        console.log(main);
        await loadFull(main);
      }

  return (
    <>
    <Particles className='content-container' id='tsparticles' init={particlesInit} 
        options={tsparticlesconfig} />
    </>
  )
}

export default particles