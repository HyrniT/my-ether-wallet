import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import BuyModal from '../ui/modal/buy';

const activeStyle = {
  backgroundColor: '#204C6F',
  fontWeight: 'bold',
  color: 'white',
};

const unactiveStyle = {
  fontWeight: '100',
  color: '#BFC4C9',
};

const Navbar = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='py-2'>
      <Link to='/wallet/etherscan'>
        <div
          className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
          style={
            location.pathname.startsWith('/wallet/etherscan')
              ? activeStyle
              : unactiveStyle
          }
        >
          <div className='p-4'>
            <img
              src='/assets/dashboard.svg'
              alt='Dashboard icon'
              width={24}
              height={24}
            />
          </div>
          <div className='text-sm tracking-tight'>Etherscan</div>
        </div>
      </Link>
      <div className=' h-[0.1px] bg-gray-400 mx-4 my-2'></div>
      <Link to='/wallet/send'>
        <div
          className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
          style={
            location.pathname === '/wallet/send' ? activeStyle : unactiveStyle
          }
        >
          <div className='p-4'>
            <img
              src='/assets/send.svg'
              alt='Dashboard icon'
              width={24}
              height={24}
            />
          </div>
          <div className='text-sm tracking-tight'>Send</div>
        </div>
      </Link>
      <div
        className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
        style={unactiveStyle}
      >
        <div className='p-4'>
          <img
            src='/assets/receive.svg'
            alt='Receive icon'
            width={24}
            height={24}
          />
        </div>
        <div className='text-sm tracking-tight'>Receive</div>
      </div>
      <div
        className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
        style={unactiveStyle}
        onClick={handleOpenModal}
      >
        <div className='p-4'>
          <img
            src='/assets/buy-sell.svg'
            alt='Buy sell icon'
            width={24}
            height={24}
          />
        </div>
        <div className='text-sm tracking-tight'>Buy / Sell</div>
      </div>
      <Link to='/wallet/mine'>
        <div
          className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
          style={
            location.pathname === '/wallet/mine' ? activeStyle : unactiveStyle
          }
        >
          <div className='p-4'>
            <img
              src='/assets/mine.svg'
              alt='Buy sell icon'
              width={24}
              height={24}
            />
          </div>
          <div className='text-sm tracking-tight'>Mine</div>
        </div>
      </Link>
      <div className=' h-[0.1px] bg-gray-400 mx-4 my-2'></div>
      <div
        className='flex items-center justify-start px-4 hover:bg-[#204C6F]'
        style={unactiveStyle}
      >
        <div className='p-4'>
          <img
            src='/assets/logout.svg'
            alt='Logout icon'
            width={24}
            height={24}
          />
        </div>
        <div className='text-sm tracking-tight'>Logout</div>
      </div>
      <BuyModal open={openModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
