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
      ease: "linear"
     }}>
      <h1><span className="font-main">this.</span>reymond_villanueva</h1>
    </motion.div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ 
      duration: 0.9,
      delay: 1,
      ease: "linear"
     }}><h4><span className="font-green">FULL STACK DEVELOPER</span></h4></motion.div>
    
      
    </>
  )
}

export default Home