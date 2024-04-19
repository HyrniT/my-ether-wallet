import { useState } from 'react';
import styles from './styles.module.css';
import { TextField, Checkbox, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import WarningIcon from '@mui/icons-material/Warning';
import { green, orange } from '@mui/material/colors';

const AccessWalletPrivateKeyPage = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = event => {
    const inputValue = event.target.value;
    if (inputValue.trim() === '') {
      setError(true);
    } else {
      setError(false);
    }
    setValue(inputValue);
  };

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className='w-full flex flex-col items-center justify-center mt-[140px]'>
      <div className='w-[600px] bg-white rounded-lg'>
        <div
          className={`${styles['text-decoration--container']} flex flex-col text-black pt-5 pb-11 px-8`}
        >
          <div className='mb-[52px] mt-[20px] text-center text-[32px] font-bold'>
            Access Wallet with Private Key
          </div>
          <h3 className='font-bold text-base mb-1 tracking-tighter'>
            Enter your private key
          </h3>
          <TextField
            type='password'
            fullWidth
            size='small'
            margin='dense'
            label='Private Key'
            placeholder='Enter your Private Key'
            value={value}
            onChange={handleChange}
            error={error}
            helperText={error ? 'This field is required' : ''}
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
          <div className='self-center'>
            <div className='flex items-center text-base my-[16px] tracking-tighter'>
              <Checkbox
                icon={<CircleOutlinedIcon />}
                checkedIcon={<CheckCircleIcon />}
                checked={isChecked}
                onChange={handleCheckboxChange}
                // sx={{
                //   color: green['A200'],
                //   '&.Mui-checked': {
                //     color: green['A200'],
                //   },
                // }}
              />
              <span className='text-gray-500'>
                To access my wallet, I accept&nbsp;
              </span>
              <a
                className='text-[#1976D2] font-medium'
                target='_blank'
                href='https://www.myetherwallet.com/terms-of-service'
              >
                Terms
              </a>
            </div>
            <Button
              style={{ fontSize: '12px', fontWeight: 'bold' }}
              variant='contained'
              fullWidth
              size='large'
              disabled={error || value.trim() === '' || !isChecked}
            >
              Access Wallet
            </Button>
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

export default AccessWalletPrivateKeyPage;
