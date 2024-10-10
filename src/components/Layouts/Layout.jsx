import { Outlet, useLocation } from 'react-router-dom';
import { userRoutes } from '@/models/routes.js';
import Menu from '@/components/shared/Menu/Menu.jsx';
import config from '@/config/projectConfig.json';
import Header from '../shared/Header/Header';
import { LayoutProvider, useLayoutContext } from './LayoutProvider';
import { AppShell } from '@mantine/core';

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <LayoutProvider>
      <AppShell
        header={{ height: 60, offset: false }}
        navbar={{
          width: 'auto',
          breakpoint: 'sm',
        }}
        padding="md"
      >
        <AppShell.Navbar
          style={{
            width: '350px',
            border: '2px solid #2D2F39',
            backgroundColor: '#161A23',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            height: '100vh',
          }}
        >
          <Menu />
        </AppShell.Navbar>
        <AppShell.Main bg={config.colors.background}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </LayoutProvider>
  );
};

export default Layout;
