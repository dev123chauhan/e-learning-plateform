import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from './hooks/useAuth';

function GoogleLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      login(token);
      navigate('/');
    }
  }, [location, login, navigate]);

  return <div>Processing login...</div>;
}
export default GoogleLogin