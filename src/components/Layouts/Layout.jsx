import { LayoutProvider } from './LayoutProvider';
import LayoutContainer from '@/components/Layouts/LayoutContainer.jsx';

const Layout = () => {
  return (
    <LayoutProvider>
      <LayoutContainer />
    </LayoutProvider>
  );
};

export default Layout;
