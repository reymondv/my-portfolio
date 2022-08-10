import { Button } from '../Button/index.js';

const Card = (props) => {
  return (
    <>
      <div className='rounded overflow-hidden shadow-lg bg-white h-full'>
        <img className='object-fill' src={props.image} alt={props.image} />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-black'>{props.title}</div>
          <p className='text-gray-700 text-base'>{props.children}</p>
        </div>
        <div className='px-2 pt-4 pb-4'>
          <Button onClickButton={props.clicked}>Read more</Button>
        </div>
      </div>
    </>
  );
};

export default Card;
