import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
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
          <span className='font-green'>FULL STACK DEVELOPER</span>
        </h4>
      </motion.div>
    </>
  );
};

export default Home;
