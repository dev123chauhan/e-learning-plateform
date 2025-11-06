import apiClient from '../config/apiClient';

export const contactService = {

  sendMessage: async (formData) => {
    const response = await apiClient.post('/contact', formData);
    return response.data;
  },
};