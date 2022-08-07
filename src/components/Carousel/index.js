import myData from '../../data/data.json';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { Button, ButtonLink } from '../Button/index.js';
import { useSwipeable } from 'react-swipeable';

const Carousel = () => {
  const [position, setPosition] = useState(0);

  const handlers = useSwipeable({
    onSwipedRight: (e) => {
      if (position > 0) {
        setPosition(position - 1);
      }
    },
    onSwipedLeft: (e) => {
      if (position < myData.projects.length - 1) {
        setPosition(position + 1);
      }
    },
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const onRight = () => {
    if (position < myData.projects.length - 1) {
      setPosition(position + 1);
    }
  };
  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  return (
    <>
      <div className='container text-black mb-[-15vh] text-center'>
        <h1 className='font-semibold text-6xl font-'>My.projects()</h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        {...handlers}
        className='h-[100vh]  bg-blend-color-burn bg-orange-500 overflow-hidden flex justify-center items-center sm:h-[20vh] scale-[0.65] rounded-xl '>
        <div className='relative'>
          {myData.projects.map((data, idx) => (
            <motion.div
              className='absolute sm:static w-[50vw] h-[65vh] overflow-hidden bg-slate-100 rounded-[45px] top-[-32vh] shadow-2xl cursor-grab'
              key={idx}
              initial={{ scale: 0, rotation: -180 }}
              whileTap={{ cursor: 'grabbing' }}
              whileInView={{
                rotate: 0,
                left: `${(idx - position) * 50 - 25}vw`,
                scale: idx === position ? 1 : 0.8,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}>
              <h1 className='text-black text-xl text-center absolute my-auto h-[100%] w-[100%] pt-[calc(60%)]'>
                project[{idx}]
              </h1>
              <img
                className='h-[100%] w-[100%] pointer-events-none'
                src={data}
                alt={data}></img>
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
      <div className='container text-black text-center mt-[-15vh]'>
        <ButtonLink link='/works'>See more</ButtonLink>
      </div>
    </>
  );
};

export default Carousel;
