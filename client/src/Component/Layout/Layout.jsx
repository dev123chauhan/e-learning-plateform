import PropTypes from 'prop-types';
import Footer from '../Home/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => {

  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
