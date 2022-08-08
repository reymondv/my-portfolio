import { motion } from 'framer-motion';
import Particles from '../../etc/particles.js';
import CurveSVG from '../Divider/curve.js';
import Carousel from '../Carousel/index.js';

const Home = () => {
  return (
    <>
      <div className='mx-[20vw] h-[calc(100vh-calc(50vh-6rem))]'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 1,
            ease: 'linear',
          }}>
          <h4 className='sm:text-[13px]'>
            <span className='text-green-450'>FULL STACK DEVELOPER</span>
          </h4>
        </motion.div>
        <Particles />
      </div>
      <CurveSVG color='bg-neutral-200' />
      <div className='container h-[100vh] bg-neutral-200'>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
