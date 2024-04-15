import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layouts/root';
import HomePage from '../pages/home';
import CreateWalletPage from '../pages/create';
import AccessWalletPage from '../pages/access';

export const mappingPathToTitle = {
  '/': 'MyEtherWallet',
  '/wallet/create':
    'Create A Crypto Wallet | Mobile and Browser Crypto Wallets',
  '/wallet/access': 'Access Your Crypto Wallet on MyEtherWallet',
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'wallet',
            children: [
              {
                path: 'create',
                element: <CreateWalletPage />,
              },
              {
                path: 'access',
                element: <AccessWalletPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
