import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import CardAccessWallet from '../../components/ui/card';

const AccessWalletPage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[160px]'>
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
        <CardAccessWallet
          image='/assets/icon-enkrypt.svg'
          title='Enkrypt'
          description='Connect with Enkrypt browser extension'
          isOfficial
        />
        <CardAccessWallet />
        <CardAccessWallet />
        <CardAccessWallet />
      </div>
    </div>
  );
};

export default AccessWalletPage;
