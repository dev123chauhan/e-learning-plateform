import apiClient from '../config/apiClient';

export const subscribeService = {
  subscribe: async (email) => {
    const response = await apiClient.post('/subscribe', { email });
    return response.data;
  },
};