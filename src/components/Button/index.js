import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  return (
    <a href={props.link} target='_blank' rel='noreferrer' className='px-0 mx-0'>
      <button className='bg-black text-white font-normal px-4 py-2 rounded-[100px] transition-all ease-in duration-200 hover:scale-110 inline-flex text-center items-center'>
        {props.children}
      </button>
    </a>
  );
};

const Button = (props) => {
  return (
    <button
      className='bg-black text-white font-normal px-4 py-2 rounded-[100px] transition-all ease-in duration-200 hover:scale-110 inline-flex text-center items-center'
      onClick={props.onClickButton}>
      {props.children}
    </button>
  );
};

const ButtonA = (props) => {
  return <Link {...props}> {props.children} </Link>;
};

export { ButtonLink, Button, ButtonA };
