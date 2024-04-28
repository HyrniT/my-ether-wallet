import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Drawer, Box, CssBaseline } from '@mui/material';
import Sidebar from '../sidebar';
import { mappingPathToTitle } from '../../router';

const DashboardLayout = () => {
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    document.title = mappingPathToTitle[currentPath] || 'MyEtherWallet';
  }, [location.pathname]);

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: 300,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 300,
              boxSizing: 'border-box',
            },
          }}
          variant='permanent'
          anchor='left'
        >
          <Sidebar />
        </Drawer>
        <Box
          component='main'
          sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
