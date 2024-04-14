import styles from './styles.module.css';

const Header = () => {
  return (
    <header className='fixed container mt-[36px]'>
      <div
        className={`${styles['header__container']} flex items-center justify-between rounded-[52px] shadow mx-[-10px] px-[16px]`}
      >
        <a href='/' className={`${styles['header__logo']}`}>
          <svg
            width='113'
            height='32'
            viewBox='0 0 113 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.0926 31.158C24.4641 31.158 31.2505 24.3715 31.2505 16.0001C31.2505 7.62858 24.4641 0.842163 16.0926 0.842163C7.72111 0.842163 0.934692 7.62858 0.934692 16.0001C0.934692 24.3715 7.72111 31.158 16.0926 31.158Z'
              fill='#1896A4'
            ></path>
            <path
              d='M16.8729 21.0428C16.2577 21.137 15.6181 21.1247 14.9754 20.9763C12.2731 20.3525 10.5881 17.6559 11.212 14.9536C11.2581 14.754 11.3199 14.5608 11.3866 14.3717L6.64306 12.4324C6.48319 12.8548 6.35157 13.2874 6.24908 13.7272C4.99377 19.1645 8.38483 24.5913 13.8222 25.8466C15.7285 26.2868 17.632 26.1529 19.3556 25.5627L16.8729 21.0428ZM21.0933 15.4776L14.2122 15.41L25.1613 20.4557C25.4942 19.7749 25.7608 19.0442 25.9389 18.2729C27.1942 12.8356 23.8031 7.40878 18.3658 6.15348C16.1832 5.64959 14.006 5.89596 12.096 6.71969L14.6258 11.2851C15.4715 11.0211 16.3722 10.9874 17.2353 11.1875C19.3522 11.6762 20.8467 13.4386 21.0933 15.4776Z'
              fill='white'
            ></path>
            <path
              d='M39.1747 5.61121V26.3887H44.2105V14.7593L48.5361 22.9838H51.1606L55.6996 14.7593V26.3887H60.6624V5.61121H55.6996L49.9199 16.101L44.4238 5.61121H39.1747ZM64.0224 5.61121H78.8884V9.86664H68.8898V13.6421H77.5045V17.7094H68.915V21.8582H79.127V26.3887H64.0224V5.61121ZM80.7326 5.61121H85.6926L92.5361 19.8287L94.3073 16L89.4147 5.61121H94.0968L96.2947 10.08L97.9957 5.61121H103.385L99.1298 16.101L100.974 19.8287L106.4 5.61121H111.907L103.245 26.3887H99.1663L96.8617 21.353L94.8743 26.3887H90.6582L80.7326 5.61121Z'
              fill='#0C5876'
            ></path>
          </svg>
        </a>
        <div className={`${styles['header__menu']}`}>
          <a
            href='https://ccswap.myetherwallet.com/'
            target='_blank'
            className={`${styles['header__menu-link']}`}
          >
            Buy Crypto
          </a>
          <a
            href='https://www.myetherwallet.com/how-it-works#swap'
            className={`${styles['header__menu-link']}`}
          >
            Swap Tokens
          </a>
          <div
            className={`${styles['header__menu-link']} ${styles['header__menu-link--dropdown']}`}
          >
            More features
            <div className={`${styles['header__menu-dropdown']}`}>
              <div className={`${styles['header__menu-dropdown-wrap']}`}>
                <a
                  href='https://www.myetherwallet.com/how-it-works#nft'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  NFT
                </a>
                <a
                  href='https://www.myetherwallet.com/how-it-works#dapps'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  DApps
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${styles['header__menu-link']} ${styles['header__menu-link--dropdown']}`}
          >
            Resources
            <div className={`${styles['header__menu-dropdown']}`}>
              <div className={`${styles['header__menu-dropdown-wrap']}`}>
                <a
                  href='https://www.myetherwallet.com/blog'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  Blog
                </a>
                <a
                  href='https://help.myetherwallet.com/en/'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  Help Center
                </a>
                <a
                  href='mailto:support@myetherwallet.com'
                  rel='noopener noreferrer'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  Customer Support
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${styles['header__menu-link']} ${styles['header__menu-link--dropdown']}`}
          >
            Products
            <div className={`${styles['header__menu-dropdown']}`}>
              <div className={`${styles['header__menu-dropdown-wrap']}`}>
                <a
                  href='https://www.mewwallet.com/'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  MEW Mobile App
                </a>
                <a
                  href='https://www.myetherwallet.com/wallet/access'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  MEW Portfolio Manager
                </a>
                <a
                  href='https://www.enkrypt.com/'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  Enkrypt
                </a>
                <a
                  href='https://www.ethvm.com/'
                  target='_blank'
                  className={`${styles['header__menu-dropdown-link']}`}
                >
                  ethVM
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href='https://www.myetherwallet.com/wallet/access'
          target='_blank'
          className={`${styles['header__access-button']}`}
        >
          Access my wallet
        </a>
      </div>
    </header>
  );
};

export default Header;
