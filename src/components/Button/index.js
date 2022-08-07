import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  return (
    <Link to={props.link}>
      <button className='bg-black text-white font-normal px-4 py-2 rounded-[100px] hover:bg-slate-200 transition-all ease-in duration-200 hover:text-black hover:border-solid hover:border-2 hover:border-black hover:scale-105'>
        {props.children}
      </button>
    </Link>
  );
};

const Button = () => {
  return <div>Button2</div>;
};

export { ButtonLink, Button };
