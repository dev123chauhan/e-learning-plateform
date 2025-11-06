import apiClient from '../config/apiClient';

export const profileService = {

  updateProfile: async (formData) => {
    const response = await apiClient.post('/update-profile', formData);
    return response.data;
  },


  changePassword: async (currentPassword, newPassword) => {
    const response = await apiClient.post('/change-password', {
      currentPassword,
      newPassword,
    });
    return response.data;
  },


  uploadProfilePicture: async (file) => {
    const formData = new FormData();
    formData.append('profileImage', file);

    const response = await apiClient.post('/upload-profile-picture', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};