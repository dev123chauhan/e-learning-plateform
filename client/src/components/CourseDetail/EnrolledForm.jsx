import { useState } from 'react';
import { toast } from 'sonner';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useModal } from '../../context/ModalContext';
import { Label, ModalTitle, Form, InputField, SubmitButton } from '../../styles/enrolledFormStyles';
import { courseService } from '../../api/services/courseService';
import { validateEnrollmentForm, getFieldError } from '../../utils/validations';
import Errors from '../Notification/Errors';
import { getInputStyles } from '../../utils/inputStyles';
export default function EnrollmentForm({ courseId, onEnrollmentSuccess }) {
  const { closeModal } = useModal();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    duration: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    duration: '',
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    duration: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    
    if (touched[id]) {
      const error = getFieldError(id, value);
      setErrors({ ...errors, [id]: error });
    }
  };

  const handleBlur = (fieldName) => {
    setTouched({ ...touched, [fieldName]: true });
    const error = getFieldError(fieldName, formData[fieldName]);
    setErrors({ ...errors, [fieldName]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      duration: true,
    });
    
    const { firstName, lastName, email, duration } = formData;
    const validation = validateEnrollmentForm(firstName, lastName, email, duration);
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      toast.error('Please fix the errors in the form');
      return;
    }
    
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
        setTouched({ firstName: false, lastName: false, email: false, duration: false });
        setErrors({ firstName: '', lastName: '', email: '', duration: '' });
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
          value={formData.firstName}
          onChange={handleChange}
          onBlur={() => handleBlur('firstName')}
          placeholder="Enter your first name"
          style={getInputStyles(touched.firstName, errors.firstName)}
        />
        <Errors message={errors.firstName} show={touched.firstName} />

        <Label htmlFor="lastName">Last Name</Label>
        <InputField
          id="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={() => handleBlur('lastName')}
          placeholder="Enter your last name"
          style={getInputStyles(touched.lastName, errors.lastName)}
        />
        <Errors message={errors.lastName} show={touched.lastName} />

        <Label htmlFor="email">Email</Label>
        <InputField
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          placeholder="Enter your email"
          style={getInputStyles(touched.email, errors.email)}
        />
        <Errors message={errors.email} show={touched.email} />

        <Label htmlFor="duration">Course Duration</Label>
        <InputField
          id="duration"
          type="text"
          value={formData.duration}
          onChange={handleChange}
          onBlur={() => handleBlur('duration')}
          placeholder="Enter course duration"
          style={getInputStyles(touched.duration, errors.duration)}
        />
        <Errors message={errors.duration} show={touched.duration} />

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