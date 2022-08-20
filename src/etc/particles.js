import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import tsparticlesconfig from '../data/particlesjs-config.json';
import React, { useState } from 'react';

const particles = React.memo(() => {
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
          height: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: 'absolute',
          margin: 0,
          padding: 0,
          zIndex: -999,
        }}
      />
    </>
  );
});

export default particles;
