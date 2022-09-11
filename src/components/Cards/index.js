import { Button, ButtonLink } from '../Button/index.js';
import { BsGithub } from 'react-icons/bs';

const Card = (props) => {
  const { title, image, stack, link, clicked, children } = props;

  return (
    <>
      <div className='rounded overflow-hidden shadow-lg bg-white h-full'>
        <img
          className='object-fill hover:scale-110 transition-transform duration-500 cursor-pointer'
          src={image}
          alt={image}
          onClick={clicked}
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-black'>{title}</div>
          <p className='text-gray-700 text-base'>{children}</p>
          <div className='container grid auto-cols-max grid-flow-col justify-start items-center'>
            {stack.map((data, idx) => (
              <img
                key={idx}
                src={data.img}
                alt={data.name}
                title={data.name}
                className='h-full shadow-lg border-solid border-[1px] border-black border-opacity-30 mr-2 w-10 py-1 px-1 hover:scale-110 rounded-md'
              />
            ))}
          </div>
        </div>
        <div className='px-2 pt-4 pb-4 align-center justify-between flex text-center content-between'>
          <Button onClickButton={clicked}>Read more</Button>
          {props?.link && (
            <ButtonLink link={link}>
              <BsGithub /> &nbsp;GitHub
            </ButtonLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
