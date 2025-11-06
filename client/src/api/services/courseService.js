import apiClient from '../config/apiClient';

export const courseService = {

  getAllCourses: async () => {
    const response = await apiClient.get('/courses');
    return response.data;
  },


  getCourseById: async (id) => {
    const response = await apiClient.get(`/courses/${id}`);
    return response.data;
  },


  enrollCourse: async (enrollmentData) => {
    const response = await apiClient.post('/enroll', enrollmentData);
    return response.data;
  },


  getEnrolledCourses: async () => {
    const response = await apiClient.get('/enrolled-courses');
    return response.data;
  },


  removeEnrolledCourse: async (courseId) => {
    const response = await apiClient.delete(`/enrolled-courses/${courseId}`);
    return response.data;
  },
};