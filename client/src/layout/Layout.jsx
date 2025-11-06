import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;