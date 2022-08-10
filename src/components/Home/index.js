import { motion } from 'framer-motion';
import Particles from '../../etc/particles.js';
import CurveSVG from '../Divider/curve.js';
import Carousel from '../Carousel/index.js';
import { useEffect, useState } from 'react';
import { useIsMedium } from '../../etc/MediaQuery.js';
import myData from '../../data/data.json';

const Home = () => {
  const [valueX, setX] = useState(0);
  const isMedium = useIsMedium();
  const { profile } = myData;

  useEffect(() => {
    const handleScroll = (event) => setX(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div className='mx-[15vw] h-[100vh] xl:mx-[10vw] sm:h-[105vh] md:text-center'>
        <div className='h-full md:pt-[35vh] sm:pt-[30vh]'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: 'linear',
            }}>
            <h1 className='text-3xl sm:text-[20px]'>
              <span className='text-orange-550'>this.</span>reymond_villanueva
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
              ease: 'linear',
            }}>
            <h4 className='sm:text-[13px]'>
              <span className='text-green-450'>FULL STACK DEVELOPER</span>
            </h4>
          </motion.div>

          <motion.div
            className='h-[25vh]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 1,
              ease: 'linear',
            }}>
            <h4 className='md:text-[15px] text-left md:mt-5 w-[35vw] mt-5 md:w-auto xl:w-[80%]'>
              {profile.description.map((data, idx) => (
                <p className='text-comment' key={idx}>
                  {'//'}
                  {data}
                </p>
              ))}
            </h4>
          </motion.div>
        </div>
        <Particles />
        <div className='relative'>
          <motion.div
            whileInView={
              !isMedium
                ? {
                    x: valueX * 1.5,
                  }
                : { y: -valueX * 1.5 }
            }
            viewport={{ once: true }}
            className='absolute z-[-1] md:left-0 md:top-[-105vh] sm:left-0 xl:left-[10rem] w-full h-50 left-[20rem] top-[-120vh] lg:top-[-115vh] xl:top-[-115vh] sm:w-full opacity-60'>
            <img
              className='object-cover h-[70vh] sm:h-64 sm:w-64 md:h-[20rem] md:w-auto lg:h-[30rem] rounded-full'
              src='/profile.jpg'
              alt=''
            />
          </motion.div>
        </div>
      </div>
      <CurveSVG color='bg-neutral-200' />
      <div className='container h-[100vh] bg-neutral-200'>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
