import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; 
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Component }) => {
  const { user } = useContext(AuthContext); 

  return user ? <Component /> : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
