import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import tsparticlesconfig from '../data/particlesjs-config.json';

import React from 'react';

const particles = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={tsparticlesconfig}
        style={{
          height: '100vh',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          margin: 0,
          padding: 0,
          zIndex: -1,
        }}
      />
    </>
  );
};

export default particles;
