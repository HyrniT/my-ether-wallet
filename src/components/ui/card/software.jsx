/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const CardSoftware = ({ title, image, link }) => {
  const navigate = useNavigate();

  return (
    <div className='mb-5'>
      <button
        className='w-full mb-5 py-6 min-h-[160px] rounded-[10px] bg-white border-2 border-gray-200 flex justify-center items-center'
        onClick={() => navigate(link)}
      >
        <div className='w-full flex items-center justify-between px-5'>
          <div className={`${styles['mew-heading-2']} ml-3`}>{title}</div>
          <img src={image} className='ml-5 mr-5 h-[70px]' />
        </div>
      </button>
    </div>
  );
};

export default CardSoftware;
