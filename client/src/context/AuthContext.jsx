import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8000/api/user', {
            headers: { 'x-auth-token': token },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Failed to fetch user", error);
        }
      }
    };

    fetchUser();
  }, []);

  const login = async (token) => {
    localStorage.setItem('token', token);
    try {
      const response = await axios.get('http://localhost:8000/api/user', {
        headers: { 'x-auth-token': token },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    // navigate("/auth")
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
