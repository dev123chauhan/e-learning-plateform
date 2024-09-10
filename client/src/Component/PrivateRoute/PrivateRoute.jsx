import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Correct path to AuthContext
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Component }) => {
  const { user } = useContext(AuthContext); // Assume user indicates the user's login status

  return user ? <Component /> : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
