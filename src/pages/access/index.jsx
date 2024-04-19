import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import CardAccess from '../../components/ui/card/access';

const CARD_DATA = [
  {
    title: 'Enkrypt',
    description: 'Connect with Enkrypt browser extension',
    image: '/assets/icon-enkrypt.svg',
    isOfficial: true,
    isRecommend: true,
    link: '/wallet/access/software',
  },
  {
    title: 'MEW wallet app',
    description: 'Connect MEW Wallet app to MEW web',
    image: '/assets/icon-mew-wallet.png',
    isOfficial: true,
    isRecommend: true,
    link: '/wallet/access/software',
  },
  {
    title: 'Browser extension',
    description: 'Use your Web3 wallet with MEW',
    image: '/assets/icon-extensions.png',
    isOfficial: false,
    isRecommend: true,
    link: '/wallet/access/software',
  },
  {
    title: 'Mobile Apps',
    description: 'WalletConnect, WalletLink',
    image: '/assets/icon-mobile-apps.png',
    isOfficial: false,
    isRecommend: true,
    link: '/wallet/access/software',
  },
  {
    title: 'Hardware wallets',
    description: 'Ledger, Trezor, KeepKey, Cool Wallet, Bitbox02',
    image: '/assets/icon-hardware-wallet.png',
    isOfficial: false,
    isRecommend: true,
    link: '/wallet/access/software',
  },
  {
    title: 'Software',
    description: 'Keystore File, Mnemonic Phrase, and Private Key',
    image: null,
    isOfficial: false,
    isRecommend: false,
    link: '/wallet/access/software',
  },
];

const AccessWalletPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[120px]'>
      <div
        className={`${styles['text-decoration--container']} text-center text-white pt-5 pb-11`}
      >
        <h1 className='mb-3'>Access my wallet</h1>
        <div className='mx-auto max-w-[550px]'>
          <h4>Please select a method to access your wallet.</h4>
          <h4>
            Don&apos;t have a wallet?{' '}
            <Link
              to='/wallet/create'
              className={`${styles['text-decoration--underline']}`}
            >
              Create Wallet
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

export default AccessWalletPage;
