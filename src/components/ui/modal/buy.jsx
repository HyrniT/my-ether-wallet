/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import {
  Modal,
  IconButton,
  Box,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  Button,
  Snackbar,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TabPanel from '../tab';
import { usdToEth, roundNumber } from '../../../utils';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const BuyModal = ({ open, onClose }) => {
  const [value, setValue] = useState(0); // for modal tabs
  const [amountUsd, setAmountUsd] = useState('');
  const [amountEth, setAmountEth] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const amountEthRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleAmountUsdChange = event => {
    const newAmountUsd = event.target.value;
    setAmountUsd(newAmountUsd);
  };

  useEffect(() => {
    if (!amountUsd) {
      setError(false);
      setAmountEth('');
    } else if (parseFloat(amountUsd) < parseFloat(50)) {
      setError(true);
      setAmountEth('');
    } else {
      setError(false);
      const formattedEthAmount = roundNumber(usdToEth(amountUsd));
      const formattedAmountEth = `${formattedEthAmount} ETH ≈ $${amountUsd}`;
      setAmountEth(formattedAmountEth);
    }
  }, [amountUsd]);

  const handleClose = () => {
    setAmountUsd('');
    onClose();
  };

  const handleBuy = () => {
    setLoading(true);
    // request API here
    setTimeout(() => {
      setLoading(false);
      setAmountUsd('');
      onClose();
      setOpenSnackbar(true);
    }, 2000);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='flex justify-end'>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className='mx-5'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label='basic tabs example'
              >
                <Tab label='Buy' {...a11yProps(0)} />
                <Tab label='Sell' {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className='flex flex-col gap-2 mb-10'>
                <div className='text-sm font-bold'>
                  How much do you want to spend?
                </div>
                <TextField
                  id='amountUsd'
                  label=''
                  type='number'
                  variant='outlined'
                  fullWidth
                  value={amountUsd}
                  onChange={handleAmountUsdChange}
                  error={error}
                  helperText={
                    error &&
                    "Amount can't be below provider's minimum $50.00 USD"
                  }
                  size='small'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img
                          src='/assets/usd.svg'
                          alt='ether'
                          height={20}
                          width={20}
                          className='mr-2'
                        />
                        $
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className='flex flex-col gap-2 mb-5'>
                <div className='text-sm font-bold'>You will get</div>
                <TextField
                  id='amountEth'
                  label=''
                  variant='outlined'
                  fullWidth
                  value={amountEth}
                  inputRef={amountEthRef}
                  size='small'
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position='start'>
                        <img
                          src='/assets/ether.svg'
                          alt='ether'
                          width={14}
                          className='mr-2'
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Coming soon...
            </TabPanel>
            {!error && amountEth && (
              <div className='flex justify-center mb-10'>
                <Button
                  variant='contained'
                  onClick={handleBuy}
                  disabled={loading}
                >
                  {loading ? 'Buying...' : 'Buy'}
                </Button>
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message='Buy successfully!'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      />
    </>
  );
};

export default BuyModal;
