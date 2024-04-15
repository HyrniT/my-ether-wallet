import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../header';
// import Footer from '../footer';
import { mappingPathToTitle } from '../../router';

const RootLayout = () => {
  const location = useLocation();
  const isWalletAccess = location.pathname.includes('/wallet/access');

  useEffect(() => {
    const currentPath = location.pathname;
    document.title = mappingPathToTitle[currentPath] || 'MyEtherWallet';

    const body = document.querySelector('body');
    body.style.backgroundColor = currentPath.includes('/wallet')
      ? '#184f90'
      : '#ffffff';
  }, [location.pathname]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Header isWalletAccess={isWalletAccess}></Header>
      <main>
        <Outlet />
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default RootLayout;
