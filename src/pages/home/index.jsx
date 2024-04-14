import styles from './styles.module.css';

const Body = () => {
  return (
    <>
      <div className={`${styles['peggy']}`}>
        <img src='assets/peggy.svg' alt='Peggy' />
      </div>
      <div
        className={`${styles['start-block']} flex flex-col items-center justify-center mt-[160px]`}
      >
        <h5>MyEtherWallet</h5>
        <h1 className='max-w-[1098px]'>
          The most reputable, friendly, and secure crypto wallet.
        </h1>
        <div className={`${styles['start-block__create']}`}>
          <div className={`${styles['start-block__create-group']}`}>
            <a href='javascript:void(0)' className={`${styles['button']}`}>
              Create a new wallet
            </a>
            <p>
              or{' '}
              <a
                href='https://www.myetherwallet.com/wallet/access'
                target='_blank'
              >
                Access my wallet
              </a>
            </p>
          </div>
          {/* <img src='assets/achievement.png' alt='Achievement' /> */}
        </div>
      </div>
    </>
  );
};

export default Body;
