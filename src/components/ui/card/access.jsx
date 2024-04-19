/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const CardAccess = ({
  title,
  description,
  image,
  isOfficial,
  isRecommend,
  link,
}) => {
  const buttonClass = isRecommend
    ? 'bg-white shadow-md'
    : 'bg-transparent border border-white text-white shadow-md hover:bg-slate-500';

  const navigate = useNavigate();

  return (
    <div className='relative'>
      {isOfficial && (
        <div
          className={`${styles['chip-official']} ${styles['note-position']} flex justify-center w-[93px]`}
        >
          <img
            src='/assets/protect.png'
            alt='Official icon'
            width={24}
            height={24}
          />
          <div className='font-medium tracking-tighter pl-1'>Official</div>
        </div>
      )}
      <button
        className={`w-full mb-5 py-6 min-h-[160px] rounded-[10px] flex justify-center items-center ${buttonClass}`}
        onClick={() => navigate(link)}
      >
        <div className='w-full flex justify-center items-center'>
          <div className='w-full flex items-center text-left'>
            <img src={image} className='ml-5 mr-6 h-[70px]' />
            <div className='px-5'>
              <div className='flex items-center'>
                <div className={`${styles['mew-heading-2']}`}>{title}</div>
              </div>
              <div className={`${styles['mew-heading-4']} mt-4 break-words`}>
                {description}
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CardAccess;
