import myData from '../../data/data.json';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { ButtonA } from '../Button/index.js';
import { useSwipeable } from 'react-swipeable';

const Carousel = () => {
  const [position, setPosition] = useState(0);
  const projects = myData.projects;

  const handlers = useSwipeable({
    onSwipedRight: (e) => position > 0 && setPosition(position - 1),
    onSwipedLeft: (e) =>
      position < projects.length - 1 && setPosition(position + 1),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const onRight = () =>
    position < projects.length - 1 && setPosition(position + 1);
  const onLeft = () => position > 0 && setPosition(position - 1);

  return (
    <>
      <div className='container text-black mb-[-15vh] text-center'>
        <h1 className='font-semibold text-6xl sm:text-3xl font-mono'>
          My.projects()
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        {...handlers}
        className='h-[100vh] bg-gradient-to-r from-amber-400 to-orange-400 overflow-hidden flex flex-wrap flex-col justify-center items-center sm:h-[20vh] scale-[0.65] rounded-xl md:hidden'>
        <div className='relative'>
          {projects.map((data, idx) => (
            <motion.div
              className='absolute overflow-hidden sm:static w-[80vw] h-[90vh] bg-gradient-to-r from-slate-50 via-neutral-200 to-stone-300 rounded-[45px] top-[-45vh] shadow-2xl cursor-grab'
              key={idx}
              initial={{ scale: 0, rotation: -180 }}
              whileTap={{ cursor: 'grabbing' }}
              whileInView={{
                rotate: 0,
                left: `${(idx - position) * 75 - 40}vw`,
                scale: idx === position ? 1 : 0.8,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}>
              <img
                className='h-[100%] w-[100%] pointer-events-none object-scale-down'
                src={data.file}
                alt={data.file}></img>
              <h1 className='text-white text-xl z-1 w-[100%] bg-black text-center cursor-pointer'>
                project[{idx}]
              </h1>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* <div>
        <button onClick={onLeft}>
          <BiLeftArrow className='hover:text-black scale-75 hover:scale-125 transition-all ease-in duration-300' />
        </button>
      </div>
      <div>
        <button onClick={onRight}>
          <BiRightArrow className='hover:text-black scale-75 hover:scale-125 transition-all ease-in duration-300' />
        </button>
      </div> */}
      <div className='container text-center mt-[-15vh] md:hidden'>
        <ButtonA
          to='/works'
          className='py-3 px-3 bg-black text-white rounded-[20px] hover:bg-slate-800'>
          See more
        </ButtonA>
      </div>
    </>
  );
};

export default Carousel;
