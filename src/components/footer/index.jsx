import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className='container'>
      <div className={`${styles['row']}`}>
        <div className={`${styles['col-3']}`}>
          <div className={`${styles['footer__links']}`}>
            <a href='https://www.myetherwallet.com/about'>About us</a>
            <a href='https://www.myetherwallet.com/careers'>Careers</a>
            <a href='https://www.myetherwallet.com/how-it-works'>
              How it works
            </a>
            <a href='https://www.myetherwallet.com/team'>Team</a>
            <a href='https://www.myetherwallet.com/advertise-with-us'>
              Advertise With Us
            </a>
          </div>
          <div className={`${styles['footer__links']}`}>
            <a href='https://www.myetherwallet.com/privacy-policy'>Privacy</a>
            <a href='https://www.myetherwallet.com/terms-of-service'>Terms</a>
            <a
              href='https://hackenproof.com/myetherwallet/myetherwallet'
              target='_blank'
            >
              Bug Bounty
            </a>
          </div>
        </div>
        <div className={`${styles['col-3']}`}>
          <div className={`${styles['footer__links']}`}>
            <a href='https://www.mewwallet.com/' target='_blank'>
              MEW Mobile App
            </a>
            <a href='https://www.enkrypt.com/' target='_blank'>
              Enkrypt
            </a>
            <a
              href='https://www.myetherwallet.com/wallet/access'
              target='_blank'
            >
              MEW Portfolio Manager
            </a>
            <a href='https://www.ethvm.com/' target='_blank'>
              ethVM
            </a>
          </div>
          <div className={`${styles['footer__links']}`}>
            <a href='https://www.myetherwallet.com/blog/' target='_blank'>
              Blog
            </a>
            <a href='https://www.myetherwallet.com/presskit'>Press Kit</a>
          </div>
        </div>
        <div className={`${styles['col-3']}`}>
          <div className={`${styles['footer__links']}`}>
            <a href='https://help.myetherwallet.com/en/' target='_blank'>
              Help Center
            </a>
            <a
              href='mailto:support@myetherwallet.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              Customer Support
            </a>
            <a href='https://www.myetherwallet.com/security-policy'>
              Security Policy
            </a>
            <a href='https://www.myetherwallet.com/tools?tool=verify'>
              Verify Message
            </a>
            <a href='https://www.myetherwallet.com/tools?tool=convert'>
              Convert Units
            </a>
            <a href='https://www.myetherwallet.com/tools?tool=offline'>
              Send Offline Helper
            </a>
          </div>
        </div>
        <div className={`${styles['col-3']}`}>
          <div className={`${styles['footer__links']}`}>
            <p>
              Help us keep MEW free and open-source, your donations go a long
              way towards making that possible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
