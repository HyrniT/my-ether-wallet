import { Link } from 'react-router-dom';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton, Snackbar } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useSelector } from 'react-redux';
import Navbar from '../navbar';
import { maskString, formatMoney, ethToUsd, roundNumber } from '../../utils';

const Sidebar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const address = useSelector(state => state.wallet.address);
  const balance = useSelector(state => state.wallet.balance);

  const maskedAddress = maskString(address);

  return (
    <div className='h-screen bg-[#07385F]'>
      <div className='px-5 pt-5 pb-3'>
        <div className='mt-2 mb-4 flex items-center justify-between'>
          <Link to='/wallet/etherscan'>
            <img src='/assets/logo.svg' alt='Logo' width={120} />
          </Link>
        </div>
        <div className='relative rounded-[16px] overflow-hidden'>
          <img src='/assets/wallet-card.png' alt='' />
          <div className='absolute top-0 left-0 p-4 pointer-events-none'>
            <div className='text-white text-sm'>{maskedAddress}</div>
          </div>
          <div className='absolute top-1/2 left-0 transform -translate-y-1/2 pl-4'>
            <h1 className='text-white text-3xl font-bold'>
              {formatMoney(ethToUsd(balance))}
            </h1>
          </div>
          <div className='absolute bottom-0 left-0 p-4 text-white'>
            <div className='text-sm'>{roundNumber(balance)} ETH</div>
          </div>
          <div className='absolute bottom-0 right-0 p-4'>
            <CopyToClipboard
              text={address}
              onCopy={() => setOpenSnackbar(true)}
            >
              <IconButton sx={{ color: '#fff' }} size='small'>
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
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
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Sidebar;
