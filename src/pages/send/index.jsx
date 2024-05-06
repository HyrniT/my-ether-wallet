import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from '@mui/material';
import BuyModal from '../../components/ui/modal/buy';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const walletInfo = {
  balance: 2.5,
  address: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
};

const lastethBlock = 19;

const SendPage = () => {
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [errors, setErrors] = useState(['']);
  const [errorAddress, setErrorAddress] = useState(['']);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const address = useSelector(state => state.wallet.address);

  useEffect(() => {
    if (!address) {
      navigate('/wallet/access');
    }
  }, [address, navigate]);

  const handleAmountChange = event => {
    const newAmount = event.target.value;
    const newErrors = [];

    if (newAmount === '' || parseFloat(newAmount) === 0) {
      newErrors.push('Amount must be greater than 0');
    } else if (isNaN(newAmount)) {
      newErrors.push('Amount must be a number');
    } else if (parseFloat(newAmount) > walletInfo.balance - 0.000256) {
      newErrors.push('Amount must be less than balance');
    }

    setAmount(newAmount);
    setErrors(newErrors);
  };

  const handleAddressChange = event => {
    const newAddress = event.target.value;
    const newAddressErrors = [];

    if (newAddress.length !== 42 || !newAddress.startsWith('0x')) {
      // setErrorAddress(true);
      newAddressErrors.push('Invalid address');
    }

    setToAddress(newAddress);
    setErrorAddress(newAddressErrors);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='h-screen relative bg-[#F2F4FA] p-10'>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card
            variant='outlined'
            style={{ borderRadius: '10px', padding: '16px' }}
          >
            <CardContent>
              <div className='flex mb-10'>
                <div className='w-[5px] h-[28px] bg-[#1976D2] mr-2'></div>
                <h1 className='text-xl font-bold mb-3'>Send</h1>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label='Token'
                    type='number'
                    select
                    variant='outlined'
                    fullWidth
                    defaultValue={'ETH'}
                    size='small'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <img
                            src='/assets/ether.svg'
                            alt='ether'
                            width={10}
                            className='mr-1'
                          />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem key={'eth'} value={'ETH'}>
                      {'ETH'}
                    </MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='amount'
                    label='Amount'
                    variant='outlined'
                    fullWidth
                    size='small'
                    value={amount}
                    onChange={handleAmountChange}
                    error={errors.length > 0}
                    helperText={errors.map((error, index) => (
                      <span key={index}>{error}</span>
                    ))}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='toAddress'
                    label='To Address'
                    variant='outlined'
                    fullWidth
                    size='small'
                    onChange={handleAddressChange}
                    value={toAddress}
                    error={errorAddress.length > 0}
                    helperText={errorAddress.map((error, index) => (
                      <span key={index}>{error}</span>
                    ))}
                  />
                  <div className='font-bold text-md mt-10 mb-1'>
                    Transaction Fee
                  </div>
                  <div className='flex justify-between items-center'>
                    <TextField
                      InputProps={{
                        readOnly: true,
                      }}
                      id='fee'
                      label=''
                      variant='outlined'
                      size='small'
                      value={'$0.81 ≈ 0.000256 ETH'}
                    />
                    <div className='text-gray-400 text-sm'>
                      Total: 0.000256 ETH
                    </div>
                  </div>
                  {amount &&
                    parseFloat(amount) !== 0 &&
                    errors.length === 0 &&
                    errorAddress.length === 0 && (
                      <>
                        <div className='font-bold text-md mt-10'>Total</div>
                        <div className='flex justify-end'>
                          <div className='font-bold text-md'>
                            {`${parseFloat(amount) + 0.000256} ETH`}
                          </div>
                        </div>
                        <div className='flex justify-center w-full'>
                          <Button variant='contained'>Send</Button>
                        </div>
                      </>
                    )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            variant='outlined'
            style={{ borderRadius: '10px', marginBottom: '20px' }}
          >
            <CardContent>
              <div className='px-3 py-2'>
                <h1 className='text-xl font-bold mb-3'>Network</h1>
                <div className='flex items-center justify-between bg-[#E1E3E8] rounded-lg p-3'>
                  <div>
                    <div className='font-bold mb-1'>Ethereum</div>
                    <div className='text-sm text-gray-500'>
                      Last block {lastethBlock}
                    </div>
                  </div>
                  <div className='py-2 px-3 bg-white rounded-md'>
                    <img src='/assets/ether.svg' alt='ether' width={20} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card variant='outlined' style={{ borderRadius: '10px' }}>
            <CardContent>
              <div className='p-3'>
                <h1 className='text-xl font-bold mb-3'>My Tokens</h1>
                <div className='flex items-center justify-between mt-5'>
                  <div className='text-sm'>{walletInfo.balance} tokens</div>
                  <div
                    className='text-sm font-bold text-[#1976D2] cursor-pointer'
                    onClick={handleOpenModal}
                  >
                    Buy Crypto
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <BuyModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default SendPage;
