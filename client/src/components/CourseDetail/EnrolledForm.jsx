import { useState } from 'react';
import { toast } from 'sonner';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useModal } from '../../context/ModalContext';
import { Label, ModalTitle, Form, InputField, SubmitButton } from '../../styles/enrolledFormStyles';
import { courseService } from '../../api/services/courseService';

export default function EnrollmentForm({ courseId, onEnrollmentSuccess }) {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    duration: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await courseService.enrollCourse({
        ...formData,
        courseId,
      });

      if (data.success) {
        toast.success('Enrollment successful!');
        onEnrollmentSuccess();
        setFormData({ firstName: '', lastName: '', email: '', duration: '' });
        setTimeout(() => closeModal(), 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Enrollment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ModalTitle>Course Registration</ModalTitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <InputField
          id="firstName"
          type="text"
          required
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />

        <Label htmlFor="lastName">Last Name</Label>
        <InputField
          id="lastName"
          type="text"
          required
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />

        <Label htmlFor="email">Email</Label>
        <InputField
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Label htmlFor="duration">Course Duration</Label>
        <InputField
          id="duration"
          type="text"
          required
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter course duration"
        />

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Spin indicator={<LoadingOutlined style={{ color: '#ffffff' }} spin />} />
          ) : (
            'Submit'
          )}
        </SubmitButton>
      </Form>
    </>
  );
}










  

























        







        














      






















































