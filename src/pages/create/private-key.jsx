import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { TextField, Button, Snackbar } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { orange } from '@mui/material/colors';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const privateKey =
  '7b6f741641269ee9ad011362ea59a6666878f15cb33ec0fcc7d7bb3e3121e166';

const maskPrivateKey = privateKey => {
  const visibleLength = 10;
  const hiddenLength = 40;
  const visibleStart = privateKey.substr(0, visibleLength);
  const visibleEnd = privateKey.substr(-visibleLength);
  const maskedPart = '●'.repeat(hiddenLength);
  return `${visibleStart}${maskedPart}${visibleEnd}`;
};
const CreateWalletPrivateKeyPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const maskedPrivateKey = maskPrivateKey(privateKey);

  return (
    <div className='w-full flex flex-col items-center justify-center mt-[140px]'>
      <div className='w-[600px] bg-white rounded-lg'>
        <div
          className={`${styles['text-decoration--container']} flex flex-col text-black pt-5 pb-11 px-8`}
        >
          <div className='mb-[52px] mt-[20px] text-center text-[32px] font-bold'>
            Create Wallet with Private Key
          </div>
          <h3 className='font-bold text-base mb-1 tracking-tighter'>
            Your private key
          </h3>
          <TextField
            id='private-key'
            disabled
            type='text'
            fullWidth
            size='small'
            value={maskedPrivateKey}
            margin='dense'
            placeholder='Enter your Private Key'
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <div className='text-sm tracking-tight text-gray-600'>
            Make sure to copy your private key now. You won’t be able to see it
            again!
          </div>
          <div className='self-center my-[20px]'>
            <CopyToClipboard
              text={privateKey}
              onCopy={() => setOpenSnackbar(true)}
            >
              <Button
                style={{ fontSize: '12px', fontWeight: 'bold' }}
                variant='contained'
                fullWidth
                size='large'
              >
                Copy to clipboard
              </Button>
            </CopyToClipboard>
            <div className='flex items-center text-base mt-2 tracking-tighter'>
              <span className='text-gray-500'>Go to&nbsp;</span>
              <Link
                className='text-[#1976D2] font-medium'
                to='/wallet/access/software/private-key'
              >
                Access Wallet with Private Key
              </Link>
            </div>
          </div>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            message='Copied to clipboard!'
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          />
          <div className='w-full bg-yellow-100 rounded-md p-5'>
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

export default CreateWalletPrivateKeyPage;
