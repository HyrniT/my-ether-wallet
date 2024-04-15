/* eslint-disable react/prop-types */
import styles from './styles.module.css';

const CardAccessWallet = ({
  title,
  description,
  image,
  isOfficial,
  isRecommend,
}) => {
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
      <button className='mb-5 py-6 min-h-[157px] bg-white rounded-[10px] shadow-md w-full flex justify-center items-center'>
        <span className={`${styles['btn__content']}`}>
          <div className='w-full flex justify-center items-center'>
            <div className='w-full flex items-center text-left'>
              <img src={image} className='ml-5 mr-6 h-[70px]' />
              <div className='px-3'>
                <div className='flex items-center'>
                  <div className={`${styles['mew-heading-2']}`}>{title}</div>
                </div>
                <div className={`${styles['mew-heading-4']} mt-4`}>
                  {description}
                </div>
              </div>
            </div>
          </div>
        </span>
      </button>
    </div>
  );
};

export default CardAccessWallet;
