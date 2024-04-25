import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import CardAccess from '../../components/ui/card/access';

const CARD_DATA = [
  {
    title: 'Install Enkrypt browser extension',
    description:
      'MEW’s official browser extension. Connect to web3 on Ethereum and Polkadot, manage your NFTs, buy, send and swap',
    image: '/assets/icon-enkrypt.svg',
    isOfficial: true,
    isRecommend: true,
    link: '/wallet/create/software',
  },
  {
    title: 'Download MEW wallet app',
    description:
      'Our official mobile app to create your wallet, and connect to MEW Web using your mobile phone',
    image: '/assets/icon-mew-wallet.png',
    isOfficial: true,
    isRecommend: true,
    link: '/wallet/create/software',
  },
  {
    title: 'Buy a hardware wallet',
    description:
      'For the highest standard of security, buy a hardware wallet and use it with MEW',
    image: '/assets/icon-hardware-wallet.png',
    isOfficial: false,
    isRecommend: true,
    link: '/wallet/create/software',
  },
  {
    title: 'Software',
    description:
      'Software methods like Keystore File and Mnemonic Phrase should only be used in offline settings by experienced users',
    image: null,
    isOfficial: false,
    isRecommend: false,
    link: '/wallet/create/software',
  },
];

const CreateWalletPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[120px]'>
      <div
        className={`${styles['text-decoration--container']} text-center text-white pt-5 pb-11`}
      >
        <h1 className='mb-3'>Create a new wallet</h1>
        <div className='mx-auto max-w-[550px]'>
          <h4>Please select a method to create a new wallet</h4>
          <h4>
            Already have a wallet?{' '}
            <Link
              to='/wallet/access'
              className={`${styles['text-decoration--underline']}`}
            >
              Access Wallet
            </Link>
          </h4>
        </div>
      </div>
      <div className='mx-auto max-w-[650px] w-full'>
        {CARD_DATA.map((card, index) => (
          <CardAccess key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CreateWalletPage;
