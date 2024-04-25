import styles from './styles.module.css';
import CardSoftware from '../../components/ui/card/software';
import WarningIcon from '@mui/icons-material/Warning';
import { orange } from '@mui/material/colors';

const CARD_DATA = [
  {
    title: 'Keystore',
    description:
      'Using a keystore file online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation.',
    image: '/assets/icon-keystore-file.svg',
    link: '/wallet/access/software/private-key',
  },
  {
    title: 'Mnemonic Phrase',
    description:
      'Using a Mnemonic Phrase online makes your wallet more vulnerable to loss of funds. We don’t recommend this method of wallet creation.',
    image: '/assets/icon-mnemonic.svg',
    link: '/wallet/access/software/private-key',
  },
  {
    title: 'Private Key',
    description:
      'A private key is a crucial piece of information granting access to your cryptocurrency holdings. Keep it secure offline, as online exposure risks theft or loss of funds.',
    image: '/assets/icon-private.png',
    link: '/wallet/access/software/private-key',
  },
];

const AccessWalletSoftwarePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center my-[140px]'>
      <div className='w-[600px] bg-white rounded-lg'>
        <div
          className={`${styles['text-decoration--container']} flex flex-col text-black pt-5 pb-11 px-8`}
        >
          <div className='mb-[52px] mt-[20px] text-center text-[32px] font-bold'>
            Select Software Wallet
          </div>
          <div className='mx-auto max-w-[650px] w-full'>
            {CARD_DATA.map((card, index) => (
              <CardSoftware key={index} {...card} />
            ))}
          </div>
          <div className='w-full bg-yellow-100 rounded-md p-5 mt-5'>
            <div className='w-full flex items-start justify-center'>
              <WarningIcon style={{ color: orange[800], marginTop: '5px' }} />
              <div className='w-full flex flex-col items-start mx-5 text-gray-600'>
                <div className='text-base font-bold tracking-tight'>
                  NOT RECOMMENDED
                </div>
                <div className='text-sm tracking-tight'>
                  This information is sensitive, and these options should only
                  be used in offline settings by experienced crypto users.
                </div>
                <div className='text-sm tracking-tight text-[#1976D2] font-bold'>
                  <a href='https://help.myetherwallet.com/en/articles/5377921-mew-says-not-recommended-when-i-access-my-wallet-why'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessWalletSoftwarePage;
