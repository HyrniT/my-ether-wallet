import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layouts/root';
import HomePage from '../pages/home';
import CreateWalletPage from '../pages/create';
import AccessWalletPage from '../pages/access';

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
