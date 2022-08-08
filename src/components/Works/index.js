import Particles from '../../etc/particles.js';

const Works = ({ json }) => {
  return (
    <>
      <div className='mx-[15vw] h-[calc(100vh-calc(50vh-6rem))] md:h-[calc(100vh-calc(50vh-10rem))] xl:mx-[10vw] md:text-center'>
        {json.map((data, idx) => (
          <p key={idx}>{data.company}</p>
        ))}
        <Particles />
      </div>
    </>
  );
};

export default Works;
