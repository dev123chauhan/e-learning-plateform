import apiClient from '../config/apiClient';

export const authService = {

  login: async (email, password) => {
    const response = await apiClient.post('/login', { email, password });
    return response.data;
  },


  register: async (username, email, password) => {
    const response = await apiClient.post('/register', { 
      username, 
      email, 
      password 
    });
    return response.data;
  },


  getUser: async () => {
    const response = await apiClient.get('/user');
    return response.data;
  },


  logout: async () => {
    const response = await apiClient.post('/logout');
    return response.data;
  },
};