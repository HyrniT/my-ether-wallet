import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layouts/root';
import DashboardLayout from '../components/layouts/dashboard';
import HomePage from '../pages/home';
import CreateWalletPage from '../pages/create';
import CreateWalletSoftwarePage from '../pages/create/software';
import CreateWalletPrivateKeyPage from '../pages/create/private-key';
import AccessWalletPage from '../pages/access';
import AccessWalletSoftwarePage from '../pages/access/software';
import AccessWalletPrivateKeyPage from '../pages/access/private-key';
import DashboardPage from '../pages/dashboard';
import SendPage from '../pages/send';
import MinePage from '../pages/mine';
import BlockDetailsPage from '../pages/block';
import TransactionDetailsPage from '../pages/transaction';

export const mappingPathToTitle = {
  '/wallet/create':
    'Create A Crypto Wallet | Mobile and Browser Crypto Wallets',
  '/wallet/create/software':
    'Create A Crypto Wallet | Mobile and Browser Crypto Wallets',
  '/wallet/create/software/private-key':
    'Create A Crypto Wallet | Mobile and Browser Crypto Wallets',
  '/wallet/access': 'Access Your Crypto Wallet on MyEtherWallet',
  '/wallet/access/software': 'Access Your Crypto Wallet on MyEtherWallet',
  '/wallet/access/software/private-key':
    'Access Your Crypto Wallet on MyEtherWallet',
  '/wallet/etherscan': 'Crypto Manager | MyEtherWallet',
  '/wallet/send': 'Send Crypto | MyEtherWallet',
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
                children: [
                  {
                    index: true,
                    element: <CreateWalletPage />,
                  },
                  {
                    path: 'software',
                    children: [
                      {
                        index: true,
                        element: <CreateWalletSoftwarePage />,
                      },
                      {
                        path: 'private-key',
                        element: <CreateWalletPrivateKeyPage />,
                      },
                    ],
                  },
                ],
              },
              {
                path: 'access',
                children: [
                  {
                    index: true,
                    element: <AccessWalletPage />,
                  },
                  {
                    path: 'software',
                    children: [
                      {
                        index: true,
                        element: <AccessWalletSoftwarePage />,
                      },
                      {
                        path: 'private-key',
                        element: <AccessWalletPrivateKeyPage />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: 'wallet/etherscan',
        element: <DashboardPage />,
      },
      {
        path: 'wallet/etherscan/block/:blockId',
        element: <BlockDetailsPage />,
      },
      {
        path: 'wallet/etherscan/transaction/:transactionId',
        element: <TransactionDetailsPage />,
      },
      {
        path: 'wallet/send',
        element: <SendPage />,
      },
      {
        path: 'wallet/mine',
        element: <MinePage />,
      },
    ],
  },
]);

export default router;
