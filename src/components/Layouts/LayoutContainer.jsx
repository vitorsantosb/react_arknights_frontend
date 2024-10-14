import { AppShell, Burger} from '@mantine/core';
import Menu from '@/components/shared/Menu/Menu.jsx';
import { useLayoutContext } from '@/components/Layouts/LayoutProvider.jsx';
import config from '@/config/projectConfig.json';
import { Outlet } from 'react-router-dom';

function LayoutContainer() {
  const { toggleMobile, mobileOpened } = useLayoutContext();
  return (
    <AppShell
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened } }}
      padding="md"
    >
      <Burger opened={mobileOpened} onClick={() => {
        toggleMobile();
      }} hiddenFrom="sm" size="sm" />
      <AppShell.Navbar
        style={{
          borderColor: 'transparent',
          backgroundColor: '#161A23',
        }}
        p="md">
        <Menu />
      </AppShell.Navbar>
      <AppShell.Main
        bg={config.colors.background}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default LayoutContainer;