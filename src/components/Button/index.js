import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  return (
    <a
      href={props.link}
      target={props.target ? '_blank' : ''}
      rel='noreferrer'
      className='px-0 mx-0'>
      <button className='bg-black text-white font-normal px-4 py-2 rounded-[100px] transition-all ease-in duration-200 hover:scale-110 inline-flex text-center items-center'>
        {props.children}
      </button>
    </a>
  );
};

const Button = (props) => {
  return (
    <button
      className='bg-black text-white font-normal inline-flex text-center items-center px-4 py-2 rounded-[100px] hover:bg-slate-200 transition-all ease-in duration-200 hover:text-black hover:border-solid hover:border-2 hover:border-black hover:scale-105'
      onClick={props.onClickButton}>
      {props.children}
    </button>
  );
};

export { ButtonLink, Button };
